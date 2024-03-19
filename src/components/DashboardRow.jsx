import React, { useState } from 'react'
import DashboardRowItem from './DashboardRowItem';

function DashboardRow({title, data}) {
    // const [data,setData] = useState([]);

console.log(data);

  return (
    <div>
        <details>
            <summary className='pl-4'>
                {title}
            </summary>
            <div className='flex flex-row pl-8 pr-4 pt-4 space-x-3'>
                {data.map(item=>{
                    console.log(item);
                    return (
                        <DashboardRowItem questionId={item._id} questionString={item["questionString"]}/>
                    )
                })}
                {/* <DashboardRowItem/> */}
                {/* <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/> */}
            </div>
        </details>
        
        {/* <details>
            <summary className='pl-4'>
                Quizzes
            </summary>
            <div className='flex flex-row pl-8 pt-4 space-x-3'>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
            </div>
            
        </details> */}
    </div>
  );
}

export default DashboardRow

