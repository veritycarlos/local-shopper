import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function EntertainmentCard({ fun }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={fun.photo}
        alt="Entertainment Buisness Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { fun.name }
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={15}>
            {fun.specialty}<br/>
            {fun.addressline1}<br/>
            {fun.addressline2}<br/>
            {fun.phone}<br/>
        </Typography>
        <Typography variant="body2" fontSize={23}>   
            { fun.alcohol ?  "🥂" : null } 
            { fun.patio ? "🪑":null }
            { fun.dogs ? "🐕" : null }
        </Typography>     
        
      </CardContent>
      <CardActions >
        <Button size="large"><a href={fun.website} target="_blank">website</a></Button>
        {/* <Button size="large"><Link to={`/entertainment/${fun.id}`}>Learn More</Link></Button> */}
      </CardActions>
    </Card>
  );
}

export default EntertainmentCard; 