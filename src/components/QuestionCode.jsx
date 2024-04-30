import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function QuestionCode() {
  const [codeValue, setCodeValue] = useState("print('Hello World!')");
  const [outputText, setOutputText] = useState("");
  const [data, setData] = useState([]);

  const {id} = useParams();
  console.log(id);

  
  useEffect(() => {
    const API_URL = "http://localhost:5050";
    const API_ENDPOINT = "/api/questions/get";
    const API = `${API_URL}${API_ENDPOINT}`;
    const options = {
      method: "POST",
      mode: "no-cors",
      url: API,
      data: {'_id':id}
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
        alert("Database/Axios Error");
      });
  }, [id]);

  // useEffect(() => {
  //     console.log(codeValue);
  // }, [codeValue])

  function runCode() {
    const data = {
      id: id,
      code: codeValue,
      codeLanguage: "python3",
    };

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050";
    const API_ENDPOINT = "/api/code/test";
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
      });
  }


  return (
    <div id="main" className="fixed grid h-[100%] w-[100%] grid-cols-11 gap-1 p-1 m-0">
      <div className="h-[100%] overflow-y-auto col-span-4 col-start-1 grid grid-rows-11 gap-1">
        {/* <div className="row-start-1 row-span-7 overflow-scroll"> */}
          <div className="bg-white border border-solid border-black row-start-1 row-span-7 overflow-y-auto p-2">
            {data['questionString']}
          </div>
          {/* </div> */}
          <div className="row-start-8 row-span-4 overflow-y-auto bg-white border border-solid border-black p-2">
            TEST CASES
          {/* </div> */}
        </div>
        <div></div>
      </div>

      {/* <!-- Element 2: Code Holder --> */}
      <div className="col-start-5 col-span-7 grid h-[100%] max-h-screen grid-cols-5 grid-rows-12 gap-2 border border-solid border-black">
        <div
          id="topbar"
          className="col-span-5 h-12 col-start-1 row-start-1 row-end-2 flex items-center justify-between pr-2 pt-2"
        >
          <select
            name="lang"
            id="lang"
            className="ml-2 mr-auto h-10 w-40 rounded-lg text-lg"
          >
            <option value="python3">Python3</option>
            <option value="javascript">Javascript</option>
            <option value="c">C</option>
            <option value="java">Java</option>
          </select>
          {/* <!-- <button id="js">JS</button> --> */}
          <button
            id="submit"
            onClick={() => setCodeValue("")}
            className="mr-2 h-10 w-20 rounded-md border border-solid border-gray-400 bg-gray-200 text-center text-xl"
          >
            Submit
          </button>
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
          className="col-span-5 col-start-1 row-start-2 row-end-[-1] border border-solid border-black overflow-y-auto"
        >
          <div name="code" id="code-text" className="m-0 p-2 text-lg">
            <CodeMirror
              value={codeValue}
              options={{
                tabSize: 2,
                mode: "python",
                // keyMap: 'sublime',
                // theme: 'monokai',
              }}
              onChange={setCodeValue}
              // className="h-[100%]"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
