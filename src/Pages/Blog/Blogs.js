import React, { useEffect, useState } from 'react'
import RecentBlogs from "./Components/RecentBlogs"
import AllBolgs from './Components/AllBolgs'
import Header from './Components/Header'
import Footer from '../../Shared-Components/Footer'
import ReactPaginate from 'react-paginate';
import Pagination from './Components/Pagination'
import Language from '../Language'
import NavBar from '../NavBar'

const Blogs = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = language === "ar" ? "right" : "left";
  }, [language]);
  return (
    <div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28 bg-black'>
        <NavBar/>
        <Header />
        <Language onChange={setLanguage} />
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#0A0D0E" }}>
        <RecentBlogs />
        <AllBolgs />
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#000000" }}>
        <Pagination />
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#0A0D0E" }}>
        <Footer />
      </div>

    </div>

  )
}

export default Blogs