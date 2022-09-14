import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Card /*  Alert, Spinner */ } from "react-bootstrap";

const MovieDetails = ({ movieTitle }) => {
  const [movieDetailsObject, setMovieDetailsObject] = useState(null);

  useEffect(() => {
    fetchMovieDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // like componentDidMount()

  const fetchMovieDetails = () => {
    fetch("http://www.omdbapi.com/?apikey=85a2b045&s=" + movieTitle)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(movies => {
        //sets the state to the first object inside the Search array
        setMovieDetailsObject(movies.Search[0]);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieTitle]);
  // this is like componentDidUpdate with an if statement that checks when this.prop.movieTitle is different than the previous prop

  return (
    <>
      <h2>{movieTitle}</h2>

      <Card>
        {/* the question mark (?) is the optional chaining operator, 
            it basically does the same as doing {this.state.movieDetailsObject && this.state.movieDetailsObject.Poster && ...} */}

        {/* this conditionally renders either the Card.Img or a skeleton */}
        {movieDetailsObject?.Poster ? (
          <Card.Img variant="top" src={movieDetailsObject.Poster} />
        ) : (
          <span style={{ lineHeight: 0 }}>
            <Skeleton height={800} />
          </span>
        )}
        <Card.Body className="text-dark p-4">
          <Card.Title>
            {/* rendering title OR a skeleton */}
            {movieDetailsObject?.Title || <Skeleton height={40} className="mb-3" />}
          </Card.Title>
          <Card.Text>{movieDetailsObject?.Year || <Skeleton count={5} />}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieDetails;
