import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


function DiningCard({ diner }) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={diner.photo}
        alt="Restaurant Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { diner.name }
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={15}>
            {diner.specialty}<br/>
            {diner.addressline1}<br/>
            {diner.addressline2}<br/>
            {diner.phone}<br/>
        </Typography>
        <Typography variant="body2" fontSize={23}>   
            { diner.alcohol ?  "🥂" : null } 
            { diner.patio ? "🪑":null }
            { diner.dogs ? "🐕" : null }
            { diner.vegan ? "🌱" : null }
            { diner.vegetarian ? "🧀" : null }
        </Typography>     
        
      </CardContent>
      <CardActions >
        <Button size="large"><a href={diner.website} target="_blank">website</a></Button>
        {/* <Button size="large"><Link to={`/dining/${diner.id}`}>Learn More</Link></Button> */}
      </CardActions>
    </Card>
    </>
  );
}

export default DiningCard; 