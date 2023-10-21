import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'

export default function CodeEditor() {
  const [codeValue, setCodeValue] = useState("print('Hello World!')")
  const [outputText, setOutputText] = useState('')

  // useEffect(() => {
  //     console.log(codeValue);
  // }, [codeValue])

  function runCode() {
    const data = {
      code: codeValue,
      codeLanguage: 'python3',
    }

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'
    const API_ENDPOINT = '/api/code/run'
    const API = `${API_URL}${API_ENDPOINT}`
    const options = {
      method: 'POST',
      mode: 'no-cors',
      url: API,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(data),
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setOutputText(response.data.output)
      })
      .catch(function (error) {
        console.error(error)
        alert('Axios Error')
      })
  }

  return (
    <div id="main" className="grid h-[100%] grid-cols-10 grid-rows-10 gap-2">
      {/* <!-- Element 1: Header--> */}
      <div
        id="topbar"
        className="col-span-7 col-start-1 row-span-1 row-start-1 flex items-center justify-between rounded-lg border border-solid border-gray-400 bg-[#282c34] pr-2"
      >
        {/* <div className="text-2xl text-center text-white">
                    Code Editor
                </div> */}

        <select
          name="lang"
          id="lang"
          className="ml-2 mr-auto w-40 rounded-lg text-lg"
        >
          <option value="python3">Python3</option>
          <option value="javascript">Javascript</option>
          <option value="c">C</option>
          <option value="java">Java</option>
        </select>
        {/* <!-- <button id="js">JS</button> --> */}
        <button
          type="reset"
          id="rst"
          onClick={() => setCodeValue('')}
          className="mr-2 h-10 w-20 rounded-md border border-solid border-gray-400 bg-gray-200 text-center text-xl"
        >
          Clear
        </button>
        <button
          id="run"
          onClick={runCode}
          className="h-10 w-20 rounded-md border border-solid border-gray-400 bg-gray-200 text-center text-xl"
        >
          {' '}
          Run{' '}
        </button>
      </div>

      {/* <!-- Element 2: Code Holder --> */}
      <div
        id="scode"
        className="row-span-9 col-span-7 col-start-1 row-start-2 h-[100%] border border-solid border-black"
      >
        <div name="code" id="code-text" className="m-0 p-2 text-lg">
          <CodeMirror
            value={codeValue}
            options={{
              tabSize: 2,
              mode: 'js',
              // keyMap: 'sublime',
              // theme: 'monokai',
            }}
            onChange={setCodeValue}
            className="h-[100%]"
          />
        </div>
      </div>

      {/* <!-- ELement 3: I/O --> */}
      <div
        id="sidebar1"
        className="col-span-3 col-start-8 row-span-full row-start-1 flex flex-col rounded-lg bg-[#282c34] p-4 pb-4 pr-4 pt-4"
      >
        <div
          id="cont-input"
          className="flex h-[50%] w-[100%] flex-1 flex-col p-1"
        >
          <label htmlFor="input" className="text-2xl text-white">
            Input:{' '}
          </label>
          {/* <br /> */}
          <textarea
            className="box flex-1"
            name="input"
            type="text"
            id="input"
          ></textarea>
        </div>
        <div
          id="cont-output"
          className="flex h-[50%] w-[100%] flex-1 flex-col p-1"
        >
          <label htmlFor="output" className="text-2xl text-white">
            Output:{' '}
          </label>
          <pre id="output" name="output" className="box flex-1 bg-white pt-2">
            {' '}
            {outputText}{' '}
          </pre>
        </div>
      </div>
    </div>
  )
}
