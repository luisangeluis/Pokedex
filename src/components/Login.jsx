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
      <div className="container login-container text-center d-flex  flex-column justify-content-evenly align-items-center h-100">
        <div className="row my-2 my-md-3 p-2 p-md-3 ">
          <div className="col-12 logo">
            <p>lorem10</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="card border-0 p-2 p-md-3  justify-content-stretch  align-items-center">
              <div className="row flex-grow-1">
                <div className="col-md-6">
                  <div className="card-body border border-3 border-info rounded w-75 h-100 mx-auto d-flex flex-column justify-content-evenly alig-items-center">
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
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  {/* <img src={imagen} alt="" className="img-fluid w-50" /> */}
                  <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c31a.png"
                    alt=""
                    className="img-fluid w-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
