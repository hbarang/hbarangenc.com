import { NextPage } from 'next'
import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'
import GameCard from './GameCard'
import GameVideo from './GameVideo'
import Arrow from './GameSliderArrow'
import games from './api/gameInfo'

const GameSlider: NextPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div>
        <div className="navigation-wrapper">
          <div
            ref={sliderRef}
            className="keen-slider"
            style={{ height: '90vh' }}
          >
            {games.map((_game, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    'keen-slider__slide ' + 'number-slide' + idx.toString()
                  }
                >
                  <GameVideo index={currentSlide}></GameVideo>
                  <GameCard index={currentSlide}></GameCard>
                </div>
              )
            })}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default GameSlider
