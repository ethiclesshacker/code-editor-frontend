import React from 'react'

export default function DashboardRowItem() {
  return (
    <div className='w-64 h-48 border border-solid border-slate-600 grid grid-rows-5'>
    <div className='row-start-1 row-span-3 border border-solid border-gray-400'>
        Answer
    </div>
    <div className='row-start-4 border border-solid border-gray-400 row-span-2'> 
        Question 
    </div>
    </div>
  )
}
