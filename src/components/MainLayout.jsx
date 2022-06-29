import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import Header from './Header';

const MainLayout = ({ isLogged }) => {
  if (isLogged) {
    return (
      <>
        {/* <header>SOY EL HEADER</header> */}
        <Header />
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
