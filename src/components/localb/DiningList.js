import React from 'react'
import DiningCard from './DiningCard'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DiningList({dining}) {
    const diningCards = dining.map(diner => (
        <Grid key={ diner.id } item xs={3}>
            <Item><DiningCard diner={ diner } /></Item>
        </Grid>
    ) )
    return (
        <>
            <br/>
            <Link to={'/diningform'} >
                <button>Click Here to Add Your Buisness!</button>
            </Link>
            <Box style={{ marginTop: "20px"}}>
                <Grid container spacing={2}>
                    { diningCards }              
                </Grid>
            </Box>
        </>
    )
}

export default DiningList
