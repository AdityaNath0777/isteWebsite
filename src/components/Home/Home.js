import React from 'react'
import CoverPage from './CoverPage'
import BelowCP from './BelowCP'
import Footer from '../Footer'
import './Home.css'
const Home = () => {
 
  return (
    <div className='home-page' >
        <CoverPage/>
        <BelowCP/>
        <Footer/>
    </div>
  )
}

export default Home