import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieDetails from "./components/MovieDetails";
import MovieDropdown from "./components/MovieDropdown";
import TestComponent from "./components/TestComponent";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("Batman Begins");

  const handleMovieTitle = newMovie => {
    setMovieTitle(newMovie);
  };

  return (
    <div className="App">
      <Container>
        <Row /*  className="justify-content-center" */>
          <Col md={6} className="offset-md-3">
            <MovieDropdown
              movieTitle={movieTitle} // READ
              handleMovieTitle={handleMovieTitle} // WRITE
            />
          </Col>

          <Col md={6} className="offset-md-3">
            <MovieDetails
              movieTitle={movieTitle} // READ
            />

            {movieTitle === "Batman Begins" && <TestComponent movieTitle={movieTitle} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
