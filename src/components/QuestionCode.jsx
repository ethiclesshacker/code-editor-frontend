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
    <div id="main" className="grid h-[100%] w-[100%] grid-cols-11 gap-2 p-2 m-0 max-h-screen">
      <div className="h-[100%] overflow-scroll col-span-4 col-start-1 border border-solid border-black grid grid-rows-11">
        <div className="row-start-1 row-span-7 overflow-scroll">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            laudantium quam eum quia magni sed, ad consectetur quisquam
            perspiciatis, expedita saepe nemo? Nam suscipit, nemo fuga
            perspiciatis mollitia cumque, itaque saepe odit quos eius
            consectetur impedit ut nesciunt rerum. Quaerat nihil iure repellat
            aliquam dolorum? Eligendi beatae at magnam dignissimos voluptatibus
            repellat! Commodi asperiores deserunt placeat consequuntur tempora
            voluptas fuga quam aut soluta sunt reiciendis magni ducimus
            repudiandae cumque magnam vitae consectetur autem officia, veritatis
            repellat, quibusdam hic. Necessitatibus, sapiente pariatur? Quis
            veniam, inventore aut rerum eaque dignissimos praesentium ad maxime
            culpa commodi non molestias facere voluptatum dolor sequi dolores
            odio eum. Rerum fugit deleniti inventore animi autem optio eveniet
            adipisci iure corrupti? Placeat hic reiciendis nisi illum nulla
            distinctio molestias ad inventore eius repellendus architecto atque,
            odit, veniam fugiat doloribus optio! Distinctio, id harum dicta
            totam hic sapiente, quas maxime non ut incidunt nihil asperiores
            minus aliquid eveniet molestiae soluta. Tempore officiis qui fugiat
            minus? A et praesentium reiciendis rerum dolorem qui maiores? Ut
            adipisci, architecto quaerat odio dignissimos autem accusantium
            minima, nemo magni earum omnis neque id maiores ad tempora
            laboriosam mollitia, sunt quod dolore? Adipisci cupiditate similique
            suscipit, porro delectus culpa vel magni. Eius, quia sed excepturi
            dolores sunt recusandae. Fuga unde obcaecati voluptas ex aspernatur
            omnis atque! Consequuntur molestias quae, tenetur tempora ad, rerum
            magni optio velit culpa voluptatum atque vitae. Vel inventore ut
            rerum laborum delectus, aspernatur quidem sit tenetur perferendis
            nisi assumenda voluptatum esse obcaecati explicabo porro corporis in
            saepe dolorum doloremque. Voluptates, consequatur? Tenetur, odio. Ab
            cum reprehenderit velit magnam dicta rem enim at adipisci provident
            suscipit rerum inventore eos asperiores, veritatis quam natus ad
            exercitationem eius! Perspiciatis unde necessitatibus maiores
            officiis sit dolore eum, culpa ab, blanditiis sunt dicta, laboriosam
            ipsum delectus qui? Illum debitis at fugit suscipit necessitatibus
            provident id impedit? Hic tempore inventore facilis quos. Veritatis,
            eligendi animi quo quaerat amet laboriosam optio voluptatibus et
            officiis vitae voluptatum? Magnam, voluptatum atque vel dolores, ea
            a tempore, dolorum tenetur perspiciatis dolore laboriosam
            repellendus? Expedita fuga in adipisci vel, quod distinctio quia
            nostrum sed neque amet corrupti, minus optio odit delectus suscipit.
            Corrupti illum commodi sint dicta. Asperiores, libero! Possimus
            earum expedita dolor commodi deserunt eius modi neque sunt
            aspernatur nam, sapiente omnis maxime provident nobis? Fugiat
            asperiores nostrum eum placeat, exercitationem nemo quas soluta
            deleniti reiciendis, autem, minus illo magni facilis. Cumque impedit
            dignissimos sit. Iste animi laudantium quos maiores mollitia,
            assumenda voluptatibus at maxime. Similique maxime unde tenetur
            beatae dolor cupiditate doloremque voluptatibus, fugiat earum, at
            ad? Dolorem placeat quia at voluptatibus nesciunt, corporis
            distinctio maiores quisquam voluptas odit libero et debitis labore
            necessitatibus, blanditiis, laudantium in cumque a. Cupiditate
            consectetur officiis doloremque! Accusantium, similique! Similique
            magnam eius quaerat, explicabo, consectetur animi odio facere et in
            dicta labore adipisci tempora ut debitis nihil rem fugit voluptate.
            Velit ex autem voluptas esse reiciendis est vero doloribus
            molestias, nihil animi recusandae, adipisci in, iure commodi
            blanditiis illum ipsum odio! A asperiores excepturi sed similique.
            Facilis maiores labore quos dolorem, ea dolorum cum.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div></div>
      </div>

      {/* <!-- Element 2: Code Holder --> */}
      <div className="col-start-5 col-span-7 grid h-[100%] max-h-screen grid-cols-5 grid-rows-12 gap-2 border border-solid border-black">
        <div
          id="topbar"
          className="col-span-5 col-start-1 row-start-1 row-end-2 flex items-center justify-between rounded-lg border border-solid border-gray-400 bg-[#282c34] pr-2"
        >
          <select
            name="lang"
            id="lang"
            className="ml-2 mr-auto h-10 w-40 rounded-lg text-center"
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
          className="col-span-5 col-start-1 row-start-2 row-end-[-1] border border-solid border-black overflow-scroll"
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
              className="h-[100%] overflow-scroll"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
