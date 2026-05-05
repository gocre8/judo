import Image from "next/image";
import { getEffectiveImage } from "@/lib/image-utils";
import { Move } from "@/lib/types";

type MoveImageProps = {
  move: Move;
  variant?: "card" | "detail";
};

export function MoveImage({ move, variant = "card" }: MoveImageProps) {
  const image = getEffectiveImage(move);

  if (!image) {
    return null;
  }

  return (
    <div className={variant === "card" ? "move-card__visual" : "detail-image"}>
      <Image
        src={image.src}
        alt={image.label}
        width={360}
        height={540}
        className={variant === "card" ? "move-card__image" : "detail-image__img"}
      />
      {image.kind === "fallback" ? (
        <span className={variant === "card" ? "move-image__badge" : "move-image__badge move-image__badge--detail"}>
          Position art
        </span>
      ) : null}
    </div>
  );
}
