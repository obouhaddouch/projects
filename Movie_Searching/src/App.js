import "./css/App.css";
import { useState, useEffect } from "react";
// import { useEffect } from ""SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';



//key: b079a7b2
const API_URL = "http://www.omdbapi.com?apikey=b079a7b2";

const movi1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    //console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <Container className="App">
      <h1> Movie@App </h1>



      <Box className="search">
        <TextField
          id="filled-basic"
          label="Search for movies..."
          variant="filled"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"

          onKeyPress={event => {
            if (event.key === 'Enter') {
              searchMovies(searchTerm)
            }
          }}

        />


        <Box onClick={() => searchMovies(searchTerm)} className="siBox" >
          <SearchIcon className="s-icon" />
        </Box>


        {/* <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} /> */}
      </Box>


      {movies?.length > 0 ? (
        <div className="m-con">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found !! </h2>
        </div>
      )}
    </Container>
  );
};

export default App;
