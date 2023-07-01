import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/aaa.jpeg'
const Home = () => {
    return (
        <div className='photo'>
          <img src={image} alt="" />
        </div>
    )
}

export default Home