import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    // <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </Router>

    // </div>
  );
}

export default App;
