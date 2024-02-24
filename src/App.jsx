import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import CodeEditor from './components/CodeEditor'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'
import AddQuestion from './components/AddQuestion'
import WindowLayout from './components/WindowLayout'
import Question_Code from './components/QuestionCode'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/code" element={<CodeEditor />}></Route>
        {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}
        <Route exact path="/logout" element={<Logout />}></Route>
        <Route path="question" element={<Question_Code />}></Route>
        {/* <Route exact path='/' element={< CodeArea />}></Route> */}
        <Route path='user' element= {<WindowLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path="addQuestion" element={<AddQuestion />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
