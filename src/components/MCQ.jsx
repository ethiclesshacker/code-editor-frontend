import React from "react";
import McqChoice from './McqChoice';

export default function MCQ() {
    return (
            <div className="flex h-[100%] items-center gap-4 justify-center">
              <div className="w-2/4 rounded-lg border border-solid border-black bg-[#ecf9ff] text-center shadow-2xl ">
                <p className="w-1/8 p-2 m-2 ml-4 mt-4 rounded-lg mb-4 float-left text-xl border border-solid border-black">Question No.: 1</p>
                <p className="w-[95%] h-auto text-xl overflow-hidden">Tempor dolor adipisicing nostrud sint consectetur. Ex deserunt ea deserunt excepteur amet fugiat eu consequat irure id velit. Adipisicing ullamco pariatur qui quis dolor dolor officia. Qui et eiusmod pariatur ut deserunt magna laboris culpa et ea incididunt irure adipisicing culpa.</p>
                <div className="flex flex-wrap justify-between text-lg ml-4 mr-2">
                  <McqChoice/>
                  <McqChoice/>
                  <McqChoice/>
                  <McqChoice/>
                 </div>
                 </div> 
            </div>
    )
}
