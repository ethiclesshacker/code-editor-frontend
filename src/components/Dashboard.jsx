import react from 'react'
import DashboardRow from './DashboardRow'

export default function Dashboard() {
    return (
    <div
        id="dash"
        className="col-span-16 col-start-5 row-span-20 row-start-3 mb-0.5 ml-5 mr-5 h-[100%] rounded-lg border border-solid border-gray-400 bg-[#ecf9ff]"
    >
        <DashboardRow />
    </div>
    );

}