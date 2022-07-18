import React from 'react'
import DiningCard from './DiningCard'
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

function DiningList() {
    return (
        <Box style={{ marginTop: "20px"}}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Item><DiningCard /> </Item>
            </Grid>
            <Grid item xs={3}>
                <Item><DiningCard /> </Item>
            </Grid>
            <Grid item xs={3}>
                <Item><DiningCard /> </Item>
            </Grid>
            <Grid item xs={3}>
                <Item><DiningCard /> </Item>
            </Grid>
            <Grid item xs={3}>
                <Item><DiningCard /> </Item>
            </Grid>
        </Grid>

       
    </Box>
    )
}

export default DiningList
