import React from 'react';
import { Link } from 'react-router-dom';

const Home3 = (): JSX.Element => {
  return (
    <>
      <h1>Home3 is Working</h1>
      <p>
        <Link to="/App">back</Link>
      </p>
    </>
  );
};

export default Home3;
