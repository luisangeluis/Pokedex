import React, { useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';

const MainLayout = ({ isLogged }) => {
  const navigate = useNavigate();

  if (isLogged) {
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
  } else {
    return <Navigate to="/" />;
  }
};

export default MainLayout;
