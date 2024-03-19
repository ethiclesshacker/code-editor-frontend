import react, { useEffect, useState } from 'react'
import DashboardRow from './DashboardRow'
import axios from 'axios';

export default function Dashboard() {
    

    const [data, setData] = useState([]);

    // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'
    const API_URL = 'http://localhost:5050'
    const API_ENDPOINT = '/api/questions/get'
    const API = `${API_URL}${API_ENDPOINT}`
    const options = {
      method: 'GET',
      mode: 'no-cors',
      url: API,
    }

    useEffect(()=>{
        axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error)
          alert('Database/Axios Error')
        })
    },[]);

    return (
    <div
        id="dash"
        className="col-span-16 col-start-5 row-span-20 row-start-3 mb-0.5 ml-5 mr-5 h-[100%] rounded-lg border border-solid border-gray-400 bg-[#ecf9ff]"
    >
        <DashboardRow title={"All Quizzes"} data={data} />
    </div>
    );

}