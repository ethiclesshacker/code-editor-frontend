import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";

export default function QuestionCode() {
  const [codeValue, setCodeValue] = useState("print('Hello World!')");
  const [outputText, setOutputText] = useState("");

  // useEffect(() => {
  //     console.log(codeValue);
  // }, [codeValue])

  function runCode() {
    const data = {
      code: codeValue,
      codeLanguage: "python3",
    };

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050";
    const API_ENDPOINT = "/api/code/run";
    const API = `${API_URL}${API_ENDPOINT}`;
    const options = {
      method: "POST",
      mode: "no-cors",
      url: API,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(data),
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setOutputText(response.data.output);
      })
      .catch(function (error) {
        console.error(error);
        alert("Axios Error");
      });
  }
  return (
    <div id="main" className="grid h-[100%] w-[100%] grid-cols-10 gap-2 p-2">
      <div className="col-span-3 col-start-1 border border-solid border-black"></div>

      <div className="col-span-7 col-start-4 grid h-[100%] grid-cols-5 grid-rows-10 gap-2 border border-solid border-black">
        {/* <!-- Element 2: Code Holder --> */}

        <div
          id="topbar"
          className="col-span-5 col-start-1 row-start-1 row-end-2 flex h-14 items-center justify-between rounded-lg border border-solid border-gray-400 bg-[#282c34]"
        >
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
            onClick={() => setCodeValue("")}
            className="mr-2 h-10 w-20 rounded-md border border-solid border-gray-400 bg-gray-200 text-center text-xl"
          >
            Clear
          </button>
          <button
            id="run"
            onClick={runCode}
            className="h-10 w-20 rounded-md border border-solid border-gray-400 bg-gray-200 text-center text-xl"
          >
            {" "}
            Run{" "}
          </button>
        </div>

        <div
          id="scode"
          className="col-span-5 col-start-1 row-start-2 row-end-[-1] border border-solid border-black"
        >
          <div name="code" id="code-text" className="m-0 p-2 text-lg">
            <CodeMirror
              value={codeValue}
              options={{
                tabSize: 2,
                mode: "js",
                // keyMap: 'sublime',
                // theme: 'monokai',
              }}
              onChange={setCodeValue}
              className="h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
