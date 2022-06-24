import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      <h2> header</h2>
      <p>Hola {userName}</p>
      <Outlet />

      <h2>footer</h2>
    </div>
  );
};

export default Home;
