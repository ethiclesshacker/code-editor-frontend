import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import CodeArea from "./components/CodeArea";
import CodeEditor from "./components/CodeEditor";
import './App.css';
// import Dashboard from "./components/Dashboard";


function App() {
  return (
    // <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/code' element={< CodeEditor />}></Route>
          {/* <Route exact path='/code' element={< Dashboard />}></Route> */}
          {/* <Route exact path='/' element={< CodeArea />}></Route> */}
        </Routes>
      </Router>

    // </div>
  );
}

export default App;
