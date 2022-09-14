import { Form } from "react-bootstrap";

const MovieDropdown = ({ movieTitle, handleMovieTitle }) => (
  <Form.Group>
    <h3 className="mt-5 mb-3">Choose your Superhero!</h3>
    <Form.Control as="select" value={movieTitle} onChange={e => handleMovieTitle(e.target.value)}>
      <option>Batman Begins</option>
      <option>Man of Steel</option>
      <option>The Joker</option>
      <option>The Flash</option>
      <option>Wonder Woman</option>
    </Form.Control>
  </Form.Group>
);

export default MovieDropdown;
