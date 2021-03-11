import React from 'react';
import { Link } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/Home2">Home2</Link>
        </li>
        <li>
          <Link to="/Home3">Home3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
