import React, { useEffect, useState } from 'react'
import KHUDAI from "../../assets/KhudiLogo.svg"
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from 'react-icons/md';
import Language from '../Language';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = language === "ar" ? "right" : "left";
  }, [language]);
    return (
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <img src={KHUDAI} className='inline-block mr-8 logo-sm'/>
       
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
       
        <div class="nav-links">
        <img src={KHUDAI} className='inline-block mr-8 logo-lg'/>

          <Link to="/" >Resources <MdKeyboardArrowDown className='inline-block'/></Link> 
          <Link to="/feature">Features <MdKeyboardArrowUp className='inline-block'/> </Link> 
          <Link to="/pricing"target="_blank">Pricing </Link>
          <Link to="./signup"  className='lang'>Sign In</Link>
          <span className='sign'>
          <Language onChange={setLanguage} />
            </span> 

        </div>
        <div class="nav-links1 ">
          <Link to="./signup" className='me-8' >Sign In</Link>
          <Language onChange={setLanguage} />
 
        </div>
      </div>
    )
}

export default NavBar