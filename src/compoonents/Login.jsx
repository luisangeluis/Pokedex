import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const goToHome = (e) => {
    console.log(e.target.children[0].children[0].value);
    navigate('/pokedex');
  };
  return (
    <div>
      <h1>Hello trainer!</h1>
      <p>Give me your name to start</p>
      <form onSubmit={goToHome}>
        <div className="mb-3">
          <input type="text" placeholder="Your name is" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
