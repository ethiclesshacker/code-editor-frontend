import React, { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import axios from "axios";



export default function CodeEditor() {

    const [codeValue, setCodeValue] = useState("print('Hello World!')");
    const [outputText, setOutputText] = useState("");

    // useEffect(() => {
    //     console.log(codeValue);
    // }, [codeValue])

    function runCode() {
        const data = {
            "code": codeValue,
            "codeLanguage": "python3"
        }

        const API_URL = "http://localhost:5050";
        const API_ENDPOINT = '/api/code/run';
        const API = `${API_URL}${API_ENDPOINT}`;
        const options = {
            method: 'POST',
            mode: 'no-cors',
            url: API,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setOutputText(response.data.output);

        }).catch(function (error) {
            console.error(error);
            alert("Axios Error");
        });
    }

    return (
        <div id="main" className="grid grid-cols-5 grid-rows-5 h-[100%]">
            {/* <!-- Element 1: Header--> */}
            <div id="sidebar" className="row-span-1 col-span-5 col-start-1 row-start-1 max-h-[20%]">
                <div className="text-2xl text-center">
                    Code Editor
                </div>
                <select name="lang" id="lang">
                    <option value="python3">Python3</option>
                    <option value="javascript">Javascript</option>
                    <option value="c">C</option>
                    <option value="java">Java</option>
                </select>
                {/* <!-- <button id="js">JS</button> --> */}
                <button type="reset" id="rst" onClick={() => setCodeValue("")}>Clear</button>
                <button id="run" onClick={runCode} > Run </button>
            </div>

            {/* <!-- Element 2: Code Holder --> */}
            <div id="scode" className="col-span-4 row-span-4 col-start-1 row-start-2 border border-solid border-black">
                <div name="code" id="code-text">
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
            <div id="sidebar1" className="col-span-1 col-start-5 row-start-2 row-span-4 flex flex-col pr-4 p-4 pb-4 pt-4 h-[100%] bg-[#282c34] rounded-lg">
                <div id="cont-input" className="flex-1 flex flex-col w-[100%] h-[50%] p-1">
                    <label for="input" className="text-2xl text-white">Input: </label>
                    {/* <br /> */}
                    <textarea className="box flex-1" name="input" type="text" id="input"></textarea>
                </div>
                <div id="cont-output" className="flex-1 flex flex-col w-[100%] h-[50%] p-1">
                    <label htmlFor="output" className="text-2xl text-white">Output: </label>
                    <pre id="output" name="output" className="box flex-1"> {outputText} </pre>
                </div>
            </div>
        </div>
    );
}