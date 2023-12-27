import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const Logout = ({ dispatchLogoutUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    dispatchLogoutUser().then(() => navigate('/'));
  };

  return (
    <button className='p-4' onClick={handleClick}>
      Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
