import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NormalRoute from './components/NormalRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import withAuth from './components/auth/withAuth';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={NormalRoute} />
          <Route
            exact
            path='/protected_route'
            Component={withAuth(ProtectedRoute)}
          />
          <Route exact path='/signup' Component={Signup} />
          <Route exact path='/login' Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
