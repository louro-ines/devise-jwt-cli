import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NormalRoute from './components/NormalRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' component={NormalRoute} />
          <Route exact path='/protected_route' component={ProtectedRoute} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
