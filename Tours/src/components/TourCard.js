
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';

import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});

const TourCard = ({tour}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} >
                    <img className='img' src={tour.image} alt='img' />

                    <Box paddingX={1}>

                        <Typography variant='subtitle1' component='h2'>
                            {tour.name}
                        </Typography>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>

                            <AccessTime sx={{ width: 12.5 }} />

                            <Typography marginLeft={0.5} variant='body2' component='p' >{tour.duration} hours</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "Wrap",

                            }}
                            marginTop={3}

                        >
                            <Rating
                                name="read-only"
                                value={tour.rating} readOnly
                                precision={0.5}
                                size="small"
                            />
                            <Typography variant='body2' component='p' marginLeft={0.5}>{tour.rating}</Typography>

                            <Typography variant='body2' component='p' marginLeft={0.5}>({tour.numberOfReviews})</Typography>

                        </Box>

                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}> From C ${tour.price} </Typography>
                        </Box>

                    </Box>

                </Paper>
            </ThemeProvider>
        </Grid>

    )

};


export default TourCard;
