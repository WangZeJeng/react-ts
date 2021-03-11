import React from 'react';
import { Link } from 'react-router-dom';

const Home2 = (): JSX.Element => {
  return (
    <>
      <h1>Home2 is Working</h1>
      <p>
        <Link to="/App">back</Link>
      </p>
    </>
  );
};

export default Home2;
