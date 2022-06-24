import React from 'react';
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

  const makeUserName = (data) => {
    console.log(data.userName);
    dispatch(setUserName(data.userName));
    navigate('/pokedex');
  };
  return (
    <div>
      <h1>Hello trainer!</h1>
      <p>Give me your name to start</p>
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
  );
};

export default Login;
