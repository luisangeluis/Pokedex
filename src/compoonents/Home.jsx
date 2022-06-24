import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      Home
      <p>Hola {userName}</p>
    </div>
  );
};

export default Home;
