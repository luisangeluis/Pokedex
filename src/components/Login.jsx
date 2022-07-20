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
        <h1 className="main-title my-2 my-md-3 py-1 py-md-2">Pokemon</h1>
        <div className="row">
          <div className="col-12">
            <div className="card border border-3 p-2 p-md-3  justify-content-stretch  align-items-center">
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center  d-none d-sm-flex">
                  <img
                    src={bulbasaur}
                    alt=""
                    className="img-fluid p-2 p-md-3 align-self-center"
                  />
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                  <div className="card-body border border-2 border-light rounded-2 d-flex flex-column justify-content-center">
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
