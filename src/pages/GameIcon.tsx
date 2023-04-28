import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider'
import { StaticImageData } from 'next/image'
import React from 'react'

import iconData from '../../public/game-icon.png'

interface GameIconProps {
  index: number
  instanceRef: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
  currentSlide: number
  gameIcon: string
}

export default function GameIcon({
  index,
  instanceRef,
  gameIcon,
  currentSlide,
}: GameIconProps) {
  let gameIconString = iconData.src

  return (
    <>
      <button
        key={index}
        onClick={() => {
          instanceRef.current?.moveToIdx(index)
        }}
        className={
          'dot focus:transition-opacity ease-in-out duration-200' +
          (currentSlide === index
            ? ' active transition-opacity ease-in-out duration-750'
            : '')
        }
        style={{
          backgroundImage: `url(${gameIconString})`,
          backgroundSize: 'cover',
        }}
      ></button>
    </>
  )
}
