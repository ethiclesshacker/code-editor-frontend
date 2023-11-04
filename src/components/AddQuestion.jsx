import React from 'react'

export default function AddQuestion() {
    return (
        <div className="flex h-[100%] items-center justify-center">
      <div className="h-96 w-1/2 rounded-lg border border-solid border-black bg-[#ecf9ff] text-center shadow-2xl ">
        <textarea className='pl-2 pr-2 pt-2 pb-2 m-10 h-20 w-5/6 border border-solid border-black' placeholder='Add Question here'></textarea>
        <textarea className='pl-2 pr-2 pt-2 pb-2 h-40 w-5/6 border border-solid border-black' placeholder='Add the test cases'></textarea>
      </div>
      </div>
    )
}