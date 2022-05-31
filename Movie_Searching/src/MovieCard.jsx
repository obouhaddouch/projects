import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





const MovieCard = ({ movie }) => {

    
    return (

        <Card sx={{ maxWidth: 345 }} className="movie">
            <CardHeader
                subheader={movie.Year}
                className="m-y"
            />

            <CardMedia
                component="img"
                height="294"
                image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                alt={movie.Title}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {movie.Type}
                </Typography>

                <Typography variant="h5" color="text.secondary">
                    {movie.Title}
                </Typography>

            </CardContent>

        </Card>

    );
};

export default MovieCard;
