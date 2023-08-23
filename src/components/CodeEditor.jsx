import React from "react";

export default function CodeEditor(){

return (
    <div id="main" className="grid grid-cols-3 col-span-2">
        <div id="sidebar">
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
        <div id="scode">
            <div name="code" id="code-text"></div>
        </div>
        
        
        {/* <!-- ELement 3: I/O --> */}
        <div id="sidebar1">
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