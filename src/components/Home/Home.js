import React from 'react'
import { Helmet } from 'react-helmet';
import CoverPage from './CoverPage'
import BelowCP from './BelowCP'
import Footer from '../Footer'
import './Home.css'
const Home = () => {
 
  return (
    <div className='home-page' >
      <Helmet>
        <title>BVP-ISTE</title>
      </Helmet>
        <CoverPage/>
        <BelowCP/>
        <Footer/>
    </div>
  )
}

export default Home