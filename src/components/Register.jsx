import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  // Personal Details
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [gender, setGender] = useState('male')
  const [userDOB, setUserDOB] = useState('')

  // College Details
  const [universityName, setUniversityName] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [courseName, setCourseName] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [semester, setSemester] = useState('')

  // Password
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  function createUser(event) {
    event.preventDefault()
    console.log(
      name,
      email,
      contactNumber,
      gender,
      userDOB,
      universityName,
      collegeName,
      courseName,
      rollNumber,
      registrationNumber,
      semester,
      password
    )
    const API_URL = 'http://localhost:5050'
    const API_ENDPOINT = '/api/users/register'
    const API = `${API_URL}${API_ENDPOINT}`
    const options = {
      method: 'POST',
      mode: 'no-cors',
      url: API,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        name,
        email,
        contactNumber,
        gender,
        userDOB,
        universityName,
        collegeName,
        courseName,
        rollNumber,
        registrationNumber,
        semester,
        password,
      }),
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('You have entered an invalid email address!')
    } else if (password !== confirmPassword) {
      alert('Passwords do not match!')
    } else {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data)
          if (response.data.token) {
            alert('Registration Successfully Completed, Redirecting to Login!!')
            navigate('/login')
          } else {
            alert('Username or password is wrong!!')
          }
        })
        .catch(function (error) {
          console.error(error)
          alert('Database/Axios Error')
        })
    }
  }

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <form onSubmit={createUser}>
        <p className="ml-64 mt-16 font-serif text-3xl font-bold">
          {' '}
          Create your account{' '}
        </p>
        <div className="mb-3 ml-72">
          {' '}
          Already have an account?
          <Link to="/login"> Login </Link>
        </div>
        <div id="register-main" className="grid grid-cols-2 gap-4">
          <fieldset className="mr-1.5 mt-1 border border-solid border-slate-950 pb-2 pl-2 pr-2">
            <legend className="mb-2 text-2xl"> Personal Details </legend>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Id"
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
            />
            <div>
              <label htmlFor="contactNumber">+91</label>{' '}
              <input
                value={contactNumber}
                onChange={(event) =>
                  setContactNumber(event.target.value.substring(0, 10))
                }
                type="text"
                placeholder="Phone Number"
                className="mb-4 inline-flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
              />
            </div>
            <input
              value={userDOB}
              onChange={(event) => setUserDOB(event.target.value)}
              type="date"
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
            />
            <div id="register-gender">
              <p className="float-left -mr-2 text-base"> Gender: </p>

              <input
                type="radio"
                name="gender"
                value="male"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('male')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Male
              </label>

              <input
                type="radio"
                name="gender"
                value="female"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('female')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Female
              </label>

              <input
                type="radio"
                name="gender"
                value="other"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('other')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Prefer Not to Say
              </label>
            </div>
          </fieldset>
          <fieldset className="mr-1.5 mt-1 border border-solid border-slate-950 pb-2 pl-2 pr-2">
            <legend className="mb-2 text-2xl"> College Details </legend>
            <input
              value={universityName}
              onChange={(event) => setUniversityName(event.target.value)}
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
              placeholder="University Name"
            />
            <input
              value={collegeName}
              onChange={(event) => setCollegeName(event.target.value)}
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
              placeholder="College Name"
            />
            <input
              value={courseName}
              onChange={(event) => setCourseName(event.target.value)}
              className="mb-4 flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base focus:outline-none"
              placeholder="Course"
            />
            <div className="grid grid-cols-2 gap-x-0">
              <input
                value={rollNumber}
                onChange={(event) => setRollNumber(event.target.value)}
                className="mb-4 flex h-10 w-36 justify-end border-b border-solid border-slate-950 bg-blue-50 text-base focus:outline-none "
                placeholder="Roll Number"
              />
              <input
                value={registrationNumber}
                onChange={(event) => setRegistrationNumber(event.target.value)}
                className="-ml-8 mb-4 flex h-10 w-56 justify-end border-b border-solid border-slate-950 bg-blue-50 text-base focus:outline-none"
                placeholder="Registration Number"
              />
            </div>
            <select
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
              className="mb-px flex h-10 w-96 justify-end border-b border-solid border-slate-950 bg-blue-50 pl-2"
            >
              <option value="" className="text-base">
                {' '}
                Semester{' '}
              </option>
              <option value="I" className="text-base">
                {' '}
                I{' '}
              </option>
              <option value="II" className="text-base">
                {' '}
                II{' '}
              </option>
              <option value="III" className="text-base">
                {' '}
                III{' '}
              </option>
              <option value="IV" className="text-base">
                {' '}
                IV{' '}
              </option>
              <option value="V" className="text-base">
                {' '}
                V{' '}
              </option>
              <option value="VI" className="text-base">
                {' '}
                VI{' '}
              </option>
              <option value="VII" className="text-base">
                {' '}
                VII{' '}
              </option>
              <option value="VIII" className="text-base">
                {' '}
                VIII{' '}
              </option>
            </select>
          </fieldset>
        </div>
        <div>
          <fieldset className="mr-1.5 mt-1 grid grid-cols-2 border border-solid border-slate-950 pb-2 pl-2 pr-2">
            <legend className="mb-2 text-2xl"> Password </legend>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="mb-4 ml-4 h-10 w-96 border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base"
              placeholder="Password"
            />
            <input
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              className="mb-4 ml-2 h-10 w-96 border-b border-solid border-slate-950 bg-blue-50 pl-2 text-base"
              placeholder="Confirm Password"
            />
          </fieldset>
        </div>
        <div>
          <button className="mb-6 ml-56 mt-3.5 h-10 w-96 border border-solid border-blue-700 bg-blue-700 text-center font-sans text-base">
            {' '}
            SignUp{' '}
          </button>
          <br />
        </div>
      </form>
    </div>
  )
}
