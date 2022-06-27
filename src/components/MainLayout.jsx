import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header>SOY EL HEADER</header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
