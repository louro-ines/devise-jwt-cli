import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/auth';
import LoadingSpinner from '../LoadingSpinner';
import Login from './Login';

const withAuth = (WrappedComponent) => {
  const Wrapper = ({
    authChecked,
    loggedIn,
    currentUser,
    dispatchCheckAuth,
    ...props
  }) => {
    useEffect(() => {
      dispatchCheckAuth();
    }, [dispatchCheckAuth]);

    if (!authChecked) {
      return <LoadingSpinner />;
    } else if (!loggedIn) {
      return (
        <>
          <Login />
          <p>You need to login to view this page.</p>
        </>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  const mapStateToProps = ({
    auth: { authChecked, loggedIn, currentUser },
  }) => {
    return { authChecked, loggedIn, currentUser };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth()),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

export default withAuth;
