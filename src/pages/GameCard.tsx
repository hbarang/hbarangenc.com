import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Image from 'next/image'
import games from './api/gameInfo'

// import gameImage from '../../square.png';

// TODO interface for game card props

function GameCard({ index }: { index: number }) {
  return (
    <Card className="border-solid rounded-2xl">
      <CardActionArea>
        <Image src={'/game.png'} alt={'game'} width={300} height={500} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {games[index]?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {games[index]?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default GameCard
