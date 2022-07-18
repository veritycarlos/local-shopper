import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import { Dining } from '@mui/icons-material';

function DiningCard({ diner }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={diner.photo}
        alt="Restaurant Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { diner.buisnessName }
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>{diner.cuisine}</p>
            <p>{diner.address}</p>
            <p>{diner.phone}</p>
            <p> { diner.alcohol ?  "🥂" : null } 
            {diner.patio ? "🪑":null}
            { diner.dogs ? "🐕" : null } </p>
            <p>
            { diner.vegan ? "Ⓥ" : null }
            { diner.vegetarian ? "🧀" : null }
            </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{diner.website}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default DiningCard; 