import React from 'react'
import GroceryCard from './GroceryCard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function GroceryList({grocery}) {
    const groceryCards = grocery.map(food => (
        <Grid key={ grocery.id } item xs={3}>
            <Item><GroceryCard food ={ food } /></Item>
        </Grid>
    ) )
    return (
        <Box style={{ marginTop: "20px"}}>
            <Grid container spacing={2}>
                { groceryCards }              
            </Grid>
        </Box>
    )
}

export default GroceryList;