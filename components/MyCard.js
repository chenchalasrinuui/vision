import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const MyCard = ({imgPath,content,heading}) => {
  return (
    <Card sx={{minHeight:'310px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <span className='text-info'>{heading}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
    </Card>
  )
}
