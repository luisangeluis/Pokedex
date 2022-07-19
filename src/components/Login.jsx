import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserName } from '../store/slices/userName.slice';
import bulbasaur from '../assets/bulbasaur.png';

const Login = () => {
  const { register, handleSubmit } = useForm();
  //REACT ROUTER
  const navigate = useNavigate();
  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Naciendo');
    dispatch(setUserName(null));
  }, []);

  const makeUserName = (data) => {
    console.log(data.userName);
    dispatch(setUserName(data.userName));
    navigate('/pokedex');
  };
  return (
    <section className="login d-flex justify-content-center align-items-center">
      <div className="container login-container text-center d-flex  flex-column justify-content-center align-items-center h-100">
        <div className="row my-2 my-md-3 p-2 p-md-3 w-100 logo">
          <div className="col-12">
            <h1 className="main-title">Pokemon</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="card border border-3 p-2 p-md-3  justify-content-stretch  align-items-center">
              <div className="row flex-grow-1 ">
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                  <img
                    src={bulbasaur}
                    alt=""
                    className="img-fluid p-2 p-md-3"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body border border-2 border-light rounded-2 w-75 h-100 mx-auto my-auto d-flex flex-column justify-content-center alig-items-center">
                    <p className="card-title subtitle-1">Pokedex</p>
                    <p className="card-text subtitle-2 ">Hello trainer!</p>
                    <p className="card-text subtitle-2 ">
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
                      <button
                        type="submit"
                        className="btn btn-login border border-1"
                      >
                        Login
                      </button>
                    </form>
                  </div>
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
