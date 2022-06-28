import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserName } from '../store/slices/userName.slice';
import imagen from '../assets/squirtle.png';
import reactLogo from '../assets/react.svg';

const Login = () => {
  const { register, handleSubmit } = useForm();
  //REACT ROUTER
  const navigate = useNavigate();
  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserName(null));
  }, []);

  const makeUserName = (data) => {
    console.log(data.userName);
    dispatch(setUserName(data.userName));
    navigate('/pokedex');
  };
  return (
    <section className="login h-100 d-flex justify-content-center align-items-center">
      <div className="container login-container text-center d-flex justify-content-center align-items-center">
        <div className="card border-0 p-3 p-md-5">
          <div className="row">
            <div className="col-12">
              <h1>Pokemon</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="card-body h-100 d-flex justify-content-center flex-column align-items-center border border-2 border-info rounded">
                <p className="card-title text-white">Pokedex</p>
                <p className="card-text text-white">Hello trainer!</p>
                <p className="card-text text-white">
                  Give me your name to start
                </p>
                <form onSubmit={handleSubmit(makeUserName)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Your name is"
                      {...register('userName', { required: true })}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-8">
              {/* <img src="src/assets/squirtle.png" alt="" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
