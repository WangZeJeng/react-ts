import React from 'react';
import { Link } from 'react-router-dom';

const Home1 = (): JSX.Element => {
  return (
    <>
      <h1>Home1 is Working</h1>
      <p>
        <Link to="/App">back</Link>
      </p>
    </>
  );
};

export default Home1;
