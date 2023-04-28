import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import games from './api/gameInfo'

export default function GameVideo({ index }: { index: number }) {
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <>
      <div className="video">
        {hasWindow && <ReactPlayer url={games[index]!.videoLink} />}
      </div>
    </>
  )
}
