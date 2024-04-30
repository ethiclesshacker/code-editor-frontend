import React, {useState, useEffect} from 'react'
import First from './Images/First.jpg'
import Second from './Images/Second.jpg'
import Third from './Images/Third.jpg'
import Fourth from './Images/Fourth.jpeg'
import Fifth from './Images/Fifth.jpg'
import { Link } from 'react-router-dom'

const images = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
];


export default function DashboardRowItem(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length))
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  }
  useEffect(() => changeImage(), [])

  return (
    // <div className='w-60 h-48 block shrink-0 border border-solid border-slate-600 rounded-lg grid grid-rows-5 transition-all duration-100 ease-out hover:w-70 hover:h-60  '>
    <div className='w-60 h-60 block shrink-0 border border-solid border-slate-600 rounded-lg grid grid-rows-5 transition-all duration-100 ease-out hover:scale-110 hover:cursor-pointer '>
    <div className='row-start-1 row-span-3'>
      <img src={images[currentImageIndex]} className='w-full h-full rounded-t-lg'></img> 

    </div>
    <Link to={`/question/${props["questionId"]}`}>
      <div className='row-start-4 row-span-2 pl-2 pb-2'> 
        <p>{props["questionString"]}</p>
      </div>
    </Link>
    </div>
  )
}

