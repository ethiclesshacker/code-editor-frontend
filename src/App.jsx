import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import CodeEditor from './components/CodeEditor'
import Dashboard from './components/Dashboard'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/code" element={<CodeEditor />}></Route>
        <Route exact path="/layout" element={<Dashboard />}></Route>
        {/* <Route exact path='/' element={< CodeArea />}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
