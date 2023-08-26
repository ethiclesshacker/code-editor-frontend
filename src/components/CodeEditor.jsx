import React, { useEffect, useState } from "react";
import CodeMirror from '@uiw/react-codemirror';



export default function CodeEditor() {

    const [codeValue, setCodeValue] = useState("console.log('Hello')");

    useEffect(()=>{
        console.log(codeValue);
    },[codeValue])
    
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
                    <option value="c">c</option>
                    <option value="java">Java</option>
                </select>
                {/* <!-- <button id="js">JS</button> --> */}
                <button type="reset" id="rst" onClick={() => setCodeValue("")}>Clear</button>
                <button id="run">Run</button>
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
            <div id="sidebar1" className="col-span-1 col-start-5 row-start-2 row-span-4 flex flex-col">
                <div id="cont-input" className="flex-1 flex flex-col">
                    <label for="input">Input: </label>
                    {/* <br /> */}
                    <textarea className="box flex-1" name="input" type="text" id="input"></textarea>
                </div>
                <div id="cont-output" className="flex-1 flex flex-col">
                    <label for="output">Output: </label>
                    {/* <br /> */}
                    {/* <textarea name="input" type="text" id="input"></textarea> */}
                    <pre className="box flex-1"> </pre>
                </div>
            </div>
        </div>
    );
}