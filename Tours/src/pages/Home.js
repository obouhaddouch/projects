import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';
import TourCard from './../components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import AppBar from './../components/AppBar';

import cities from './../data.json';
import Drawer from '../components/Drawer';
import topImg from '../img/jum.jpg';


const Home = () => (
    <div className="App">

      <div className='img-con' > 
         <img src={topImg} alt='top img' />
      </div>

      <Container sx={{ marginY: 5 }}  marginTop={60}>

       


        {cities.map((city) => (


          <>
            <Typography
              variant='h4'
              component='h2'
              marginTop={8}
              marginBottom={3}

            > Top {city.name} Tours </Typography>

            <Grid container spacing={3} marginTop={2}  >

              {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}

            </Grid>

          </>



        ))}

      </Container>

    </div>
)


export default Home;

