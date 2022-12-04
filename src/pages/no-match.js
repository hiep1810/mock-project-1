import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src='not-found.png' alt='not-found' style={{ width: '100%' }} />
      <Link to='/' className='link-home'>
        Go Home
      </Link>
    </div>
  );
};

export default NoMatchPage;
