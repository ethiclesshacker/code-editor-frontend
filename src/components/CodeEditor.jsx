import React from "react";
import CodeMirror from '@uiw/react-codemirror';

export default function CodeEditor() {
    return (
        <div id="main" className="grid grid-cols-5 grid-rows-5 h-[100%]">
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
                <button type="reset" id="rst">Clear</button>
                <button id="run">Run</button>
            </div>

            {/* <!-- ELement 2: Code Holder --> */}
            <div id="scode" className="col-span-4 row-span-4 col-start-1 row-start-2 border border-solid border-black">
                <div name="code" id="code-text">
                    <CodeMirror
                        value={"console.log('Hello')"}
                        options={{
                            // theme: 'monokai',
                            tabSize: 2,
                            // keyMap: 'sublime',
                            mode: 'js',
                        }}
                    />
                </div>
            </div>


            {/* <!-- ELement 3: I/O --> */}
            <div id="sidebar1" className="col-span-1 col-start-5 row-start-2 row-span-4">
                <div id="cont-input">
                    <label for="input">Input: </label>
                    <textarea class="box" name="input" type="text" id="input"></textarea>
                </div>
                <div id="cont-output">
                    <label for="output">Output: </label>
                    {/* <textarea name="input" type="text" id="input"></textarea> */}
                    <pre class="box"> </pre>
                </div>
            </div>
        </div>
    );
}