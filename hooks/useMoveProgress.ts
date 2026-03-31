"use client";

import { useCallback, useEffect, useState } from "react";
import { MoveProgressMap } from "@/lib/types";

const STORAGE_KEY = "judo-lab-progress";

export function useMoveProgress() {
  const [progress, setProgress] = useState<MoveProgressMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setProgress(JSON.parse(raw) as MoveProgressMap);
      }
    } catch {
      setProgress({});
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, ready]);

  const updateMove = useCallback((id: string, changes: Partial<MoveProgressMap[string]>) => {
    setProgress((current) => ({
      ...current,
      [id]: Object.assign(
        {
          favorite: false,
          studied: false,
        },
        current[id],
        changes,
      ),
    }));
  }, []);

  const markViewed = useCallback((id: string) => {
    updateMove(id, { lastViewedAt: new Date().toISOString() });
  }, [updateMove]);

  return {
    progress,
    ready,
    updateMove,
    markViewed,
  };
}
