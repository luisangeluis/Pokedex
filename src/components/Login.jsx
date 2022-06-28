import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserName } from '../store/slices/userName.slice';
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
    <div className="login h-100 d-flex justify-content-center align-items-center">
      <div className="container login-container text-center">
        <div className="card">
          <div className="card-body">
            <h1>Pokedex</h1>
            <h2>Hello trainer!</h2>
            <p className="card-title">Give me your name to start</p>
            <form onSubmit={handleSubmit(makeUserName)}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your name is"
                  {...register('userName', { required: true })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
          <img src="../assets/squirtle.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
