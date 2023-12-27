import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ dispatchLoginUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;

    dispatchLoginUser({ email, password })
      .then(() => navigate('/'))
      .catch(() => setError(true));
  };


  return (
    <form onSubmit={handleSubmit} className='w-11/12 max-w-2xl mx-auto mt-8'>
      <h1 className='font-bold text-3xl'>Log In</h1>
      <p className='h-8 text-red-400'>{error && 'Invalid email or password'}</p>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='email'>
          Email:
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={credentials.email}
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='password'>
          Password:
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={credentials.password}
        />
      </fieldset>
      <input
        className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
        type='submit'
        value='Log In'
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
