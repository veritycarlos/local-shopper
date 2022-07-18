import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';

function DiningCard({ dining }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="Restaurant Picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          buisnessName
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>bio</p>
            <p>cuisine-type</p>
            <p>alcohol</p>
            <p>dogs</p>
            <p>address</p>
            <p>phone</p>
            <p>vegetarian-options</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default DiningCard; 