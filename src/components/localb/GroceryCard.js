import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function GroceryCard({ food }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={food.photo}
        alt="Grocery Buisness Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { food.name }
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={15}>
            {food.foodType}<br/>
            {food.addressline1}<br/>
            {food.addressline2}<br/>
            {food.phone}<br/>
        </Typography>
        <Typography variant="body2" fontSize={23}>   
            { food.alcohol ?  "🥂" : null } 
        </Typography>     
        
      </CardContent>
      <CardActions >
        <Button size="large"><a href={food.website} target="_blank">website</a></Button>
        {/* <Button size="large">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default GroceryCard; 