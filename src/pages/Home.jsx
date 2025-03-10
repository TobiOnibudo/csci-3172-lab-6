import { Link } from "react-router";

function Home() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: "70vh" }}>
      <div className="text-center">
        <h1 className="display-3 fw-bold text-primary">Hey, I'm Tobi! 👋</h1>
        <p className="lead text-secondary mt-3">
          I'm a software engineer passionate about building scalable and efficient solutions.  
        </p>
        <p className="text-muted">Check out my work below and feel free to reach out if you'd like to connect!</p>
        <Link className="btn btn-primary mt-3 px-4 py-2"  to="/projects">View My Work
        </Link>
      </div>
    </div>
  );
}

export default Home;
