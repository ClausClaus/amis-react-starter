import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = props => {
  const {} = props;
  return (
    <div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/AmisForm">AmisForm</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
