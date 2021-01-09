import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="header">Fullstack Open 2020</h1>
      <h1>Part 2</h1>
      <div>
        <Link to="/courseinfo">Course Info</Link>
      </div>
    </div>
  );
};

export default Home;
