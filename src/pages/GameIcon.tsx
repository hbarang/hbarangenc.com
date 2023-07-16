import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import React from "react";

import iconData from "../../public/game-icon.png";

interface GameIconProps {
  index: number;
  instanceRef: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
  currentSlide: number;
  gameIcon: string;
}

export default function GameIcon({
  index,
  instanceRef,
  gameIcon,
  currentSlide,
}: GameIconProps) {
  // let gameIconString = iconData.src;

  return (
    <>
      <button
        key={index}
        onClick={() => {
          instanceRef.current?.moveToIdx(index);
        }}
        className={
          "dot duration-200 ease-in-out focus:transition-opacity" +
          (currentSlide === index
            ? " active duration-750 transition-opacity ease-in-out"
            : "")
        }
        style={{
          backgroundImage: `url(${gameIcon})`,
          backgroundSize: "cover",
        }}
      ></button>
    </>
  );
}
