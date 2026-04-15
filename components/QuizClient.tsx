"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { flowClusters } from "@/data/flows";
import { moveMap, moves } from "@/data/moves";

type QuizQuestion = {
  id: string;
  kind: "name" | "direction" | "flow";
  prompt: string;
  answer: string;
  moveId?: string;
  flowClusterId?: string;
};

type QuizMode = "all" | QuizQuestion["kind"];

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildQuizQuestions() {
  const questions: QuizQuestion[] = [];

  for (const move of moves) {
    questions.push({
      id: `name-${move.id}`,
      kind: "name",
      prompt: `What is the English name for ${move.japaneseName}?`,
      answer: move.name,
      moveId: move.id,
    });

    if (move.practice !== "Jiu-Jitsu" && move.primaryKuzushiDirection) {
      const secondary = move.secondaryKuzushiDirection
        ? ` Secondary: ${move.secondaryKuzushiDirection}.`
        : "";

      questions.push({
        id: `direction-${move.id}`,
        kind: "direction",
        prompt: `What is the primary kuzushi direction for ${move.name}?${secondary}`,
        answer: move.primaryKuzushiDirection,
        moveId: move.id,
      });
    }
  }

  for (const cluster of flowClusters) {
    for (const edge of cluster.edges) {
      const targetNode = cluster.nodes.find((node) => node.id === edge.toNodeId);

      if (!targetNode) {
        continue;
      }

      questions.push({
        id: `flow-${cluster.id}-${edge.fromNodeId}-${edge.toNodeId}-${edge.label}`,
        kind: "flow",
        prompt: `In ${cluster.title}, if ${edge.trigger.toLowerCase()} what is the next move or transition?`,
        answer: edge.moveId ? moveMap[edge.moveId]?.name ?? edge.label : edge.label,
        moveId: edge.moveId,
        flowClusterId: cluster.id,
      });
    }
  }

  return shuffle(questions);
}

export function QuizClient() {
  const allQuestions = useMemo(() => buildQuizQuestions(), []);
  const [mode, setMode] = useState<QuizMode>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const questions = useMemo(
    () => (mode === "all" ? allQuestions : allQuestions.filter((question) => question.kind === mode)),
    [allQuestions, mode],
  );

  const current = questions[currentIndex];

  if (!current) {
    return (
      <section className="detail-panel">
        <h3>No quiz questions yet</h3>
        <p>Add more moves or flow clusters and quiz prompts will grow automatically.</p>
      </section>
    );
  }

  return (
    <section className="detail-panel quiz-card">
      <div className="section-heading">
        <div>
          <h3>Memory Check</h3>
          <p>
            {current.kind === "name"
              ? "Name quiz"
              : current.kind === "direction"
                ? "Direction quiz"
                : "Flow quiz"}
          </p>
        </div>
        <span className="chip">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="toggle-row" aria-label="Quiz mode">
        <button
          type="button"
          className={mode === "all" ? "action-pill" : "toggle-button"}
          onClick={() => {
            setMode("all");
            setCurrentIndex(0);
            setRevealed(false);
          }}
        >
          All
        </button>
        <button
          type="button"
          className={mode === "name" ? "action-pill" : "toggle-button"}
          onClick={() => {
            setMode("name");
            setCurrentIndex(0);
            setRevealed(false);
          }}
        >
          Names
        </button>
        <button
          type="button"
          className={mode === "direction" ? "action-pill" : "toggle-button"}
          onClick={() => {
            setMode("direction");
            setCurrentIndex(0);
            setRevealed(false);
          }}
        >
          Directions
        </button>
        <button
          type="button"
          className={mode === "flow" ? "action-pill" : "toggle-button"}
          onClick={() => {
            setMode("flow");
            setCurrentIndex(0);
            setRevealed(false);
          }}
        >
          Flows
        </button>
      </div>

      <div className="quiz-card__prompt">
        <p>{current.prompt}</p>
      </div>

      {revealed ? (
        <div className="quiz-card__answer">
          <strong>Answer</strong>
          <p>{current.answer}</p>
          <div className="quick-links">
            {current.moveId ? (
              <Link className="text-link" href={`/moves/${current.moveId}`}>
                Open move
              </Link>
            ) : null}
            {current.flowClusterId ? (
              <Link className="text-link" href="/flows">
                Open flows
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="quick-links">
        <button
          type="button"
          className="action-pill"
          onClick={() => setRevealed((value) => !value)}
        >
          {revealed ? "Hide answer" : "Show answer"}
        </button>
        <button
          type="button"
          className="action-pill action-pill--ghost"
          onClick={() => {
            setCurrentIndex((value) => (value + 1) % questions.length);
            setRevealed(false);
          }}
        >
          Next question
        </button>
      </div>
    </section>
  );
}
