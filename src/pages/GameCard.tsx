import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import games from './api/gameInfo'
import Image from 'next/image'

interface GameCardProps {
  index: number
}

function GameCard({ index }: GameCardProps) {
  return (
    <Card
      className="border-solid rounded-2xl ml-20"
      style={{ height: '360px', width: '620px' }}
    >
      <CardActionArea className="relative h-52">
        <CardContent className="">
          <Typography gutterBottom variant="h5" component="div">
            {games[index]?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {games[index]?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent className="h-36">
          {games[index]?.appleStoreLink && games[index]?.googlePlayLink && (
            <div className="flex flex-row w-full relative top-6 left-10 drop-shadow-2xl gap-20">
              <Image
                src={'/google_play.png'}
                alt={'google-play-icon'}
                width={200}
                height={200}
                onClick={() =>
                  window.open(games[index]?.googlePlayLink, '_blank')
                }
              />
              <Image
                src={'/app_store.png'}
                alt={'app-store-icon'}
                width={200}
                height={200}
                onClick={() =>
                  window.open(games[index]?.appleStoreLink, '_blank')
                }
              />
            </div>
          )}
          {games[index]?.appleStoreLink && !games[index]?.googlePlayLink && (
            <Image
              className="m-auto relative top-6"
              src={'/app_store.png'}
              alt={'app-store-icon'}
              width={200}
              height={200}
              onClick={() =>
                window.open(games[index]?.appleStoreLink, '_blank')
              }
            />
          )}
          {games[index]?.googlePlayLink && !games[index]?.appleStoreLink && (
            <Image
              className="m-auto relative top-6"
              src={'/google_play.png'}
              alt={'google-play-icon'}
              width={200}
              height={200}
              onClick={() =>
                window.open(games[index]?.appleStoreLink, '_blank')
              }
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard
