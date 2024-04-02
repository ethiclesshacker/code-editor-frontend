import React from "react";

export default function MCQ() {
    return (
            <div className="flex h-[100%] items-center gap-4 justify-center">
              <div className="h-2/3 w-2/4 rounded-lg border border-solid border-black bg-[#ecf9ff] text-center shadow-2xl ">
                <p className="w-1/8 p-2 m-2 ml-4 mt-6  rounded-lg mb-4 float-left text-xl border border-solid border-black">Question No.: 1</p>
                <p className="w-[95%] h-auto text-xl overflow-hidden">Tempor dolor adipisicing nostrud sint consectetur. Ex deserunt ea deserunt excepteur amet fugiat eu consequat irure id velit. Adipisicing ullamco pariatur qui quis dolor dolor officia. Qui et eiusmod pariatur ut deserunt magna laboris culpa et ea incididunt irure adipisicing culpa.</p>
                <div className="flex flex-wrap justify-between text-xl">
                  <div className="flex border border-solid border-black w-80 h-14 pl-4 items-center rounded-lg ml-8 mt-8">
                    <input type="radio" id="html" name="fav_language" value="HTML" className="mr-1.5 w-8 h-4"/>
                    <label for="html">HTML Is a good codeLanguage</label>
                  </div>
                  <div className="flex border border-solid border-black w-80 h-14 pl-4 rounded-lg items-center mr-8 mt-8">
                    <input type="radio" id="html" name="fav_language" value="HTML" className="mr-1.5 w-8 h-4"/>
                    <label for="html">Ea ex velit sint officia commodo Lorem aliquip adipisicing pariatur tempor irure irure.</label>
                  </div>
                  <div className="flex border border-solid border-black w-80 h-14 pl-4 rounded-lg items-center ml-8 mt-8">
                    <input type="radio" id="html" name="fav_language" value="HTML" className="mr-1.5 w-8 h-4"/>
                    <label for="html">Proident proident est laborum sint nulla pariatur labore velit pariatur in exercitation nulla cillum aliqua.</label>
                  </div>
                  <div className="flex border border-solid border-black w-80 h-14 pl-4 rounded-lg items-center mr-8 mt-8">
                    <input type="radio" id="html" name="fav_language" value="HTML" className="mr-1.5 w-8 h-4"/>
                    <label for="html">Consectetur laborum eu eiusmod occaecat velit nisi excepteur excepteur laborum.</label>
                  </div>
                </div>
              </div>
            </div>
    )
}
