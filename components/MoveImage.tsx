import Image from "next/image";
import { Move } from "@/lib/types";

type MoveImageProps = {
  move: Move;
  variant?: "card" | "detail";
};

export function MoveImage({ move, variant = "card" }: MoveImageProps) {
  if (!move.imageSrc) {
    return null;
  }

  return (
    <div className={variant === "card" ? "move-card__visual" : "detail-image"}>
      <Image
        src={move.imageSrc}
        alt={`${move.japaneseName} illustration`}
        width={360}
        height={540}
        className={variant === "card" ? "move-card__image" : "detail-image__img"}
      />
    </div>
  );
}
