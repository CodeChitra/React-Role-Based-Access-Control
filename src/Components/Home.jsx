import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Public Routes</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <h2>Privtae Routes</h2>
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/editor">Editor</Link>
      <br />
      <Link to="/lounge">Lounge</Link>
      <br />
    </div>
  );
};

export default Home;
