import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const Signup = ({ dispatchSignupUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ status: { message: '' } });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    dispatchSignupUser({ email, password })
      .then(() => navigate('/'))
      .catch((errors) => setErrors({ errors }));
  };

  return (
    <form onSubmit={handleSubmit} className='w-11/12 max-w-2xl mx-auto mt-8'>
      <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
      <p className='h-8 text-red-400'>{errors && errors.status.message}</p>
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
          value={formData.email}
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
          value={formData.password}
        />
      </fieldset>
      <input
        className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
        type='submit'
        value='Sign Up'
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
