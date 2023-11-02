import React, { useState } from 'react'
import DashboardRowItem from './DashboardRowItem';

function DashboardRow() {
    const [data,setData] = useState([]);

  return (
    <div>
        <details>
            <summary className='pl-4'>
                Continue from where you left...
            </summary>
            <div className='flex flex-row pl-8 pt-4 space-x-3'>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
            </div>
        </details>
        
        <details>
            <summary className='pl-4'>
                Quizzes
            </summary>
            <div className='flex flex-row pl-8 pt-4 space-x-3'>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
                <DashboardRowItem/>
            </div>
            
        </details>
    </div>
  );
}

export default DashboardRow

