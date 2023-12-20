import React from 'react'

export default function AddQuestion() {
    return (
        <div className="col-span-16 col-start-5 row-span-20 row-start-4 mb-0.5 ml-5 mr-5 h-[100%] rounded-lg border border-solid border-gray-400 bg-[#ecf9ff]">
      {/* <div className="h-96 w-1/2 rounded-lg border border-solid border-black bg-[#ecf9ff] text-center shadow-2xl "> */}
          <div id='options'>
              <input
                type="radio"
                name="gender"
                value="testcases"
                className="mt-2 h-3 w-20"
                // onClick={() => setGender('male')}
              />
              <label
                htmlFor="gender"
                className=" text-base text-xl"
              >
                Test cases
              </label>

            <div className='flex flex-row border border-solid border-black w-52 h-10 justify-center mr-6'>  
              <input
                type="radio"
                name="gender"
                value="mcq"
                className="mt-3 h-3 w-10"
                // onClick={() => setGender('female')}
              />
              <label
                htmlFor="gender"
                className="mt-1 text-base text-xl w-10 h-5"
              >
                MCQ
              </label>
              </div>
        </div>
        <textarea className='pl-2 pr-2 pt-2 pb-2 m-10 h-20 w-5/6 border border-solid border-black' placeholder='Add Question here'></textarea>
        <textarea className='pl-2 pr-2 pt-2 pb-2 h-40 w-5/6 border border-solid border-black' placeholder='Add the test cases'></textarea>
      </div>
      // </div>
    )
}

