import React, {useState, useEffect} from 'react'
import First from './Images/First.jpg'
import Second from './Images/Second.jpg'
import Third from './Images/Third.jpg'
import Fourth from './Images/Fourth.jpeg'
import Fifth from './Images/Fifth.jpg'

const images = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
];


export default function DashboardRowItem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length))
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  }
  useEffect(() => changeImage(), [])

  return (
    <div className='w-60 h-48 border border-solid border-slate-600 rounded-lg grid grid-rows-5 transition-all duration-100  ease-out hover:w-80 hover:h-60  '>
    <div className='row-start-1 row-span-3'>
      <img src={images[currentImageIndex]} className='w-full h-full rounded-t-lg'></img> 

    </div>
    <div className='row-start-4 row-span-2 mt-2 ml-1'> 
        Question 
    </div>
    </div>
  )
}

