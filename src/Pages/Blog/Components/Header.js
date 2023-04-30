import React, { useEffect } from 'react'

const Header = () => {
   let currentlang=localStorage.getItem('lang')

   useEffect(()=>{
    currentlang=localStorage.getItem('lang')
   },[])
   
    return (
        <div className='py-20 w-full bg-black flex justify-center items-center'>
            <div>
                <label class="font-inter font-normal font-medium text-center text-green-200  text-xl sm:text-xl md:text-2xl lg:text-2xl flex justify-center">Blog</label>
                <h1 class="font-inter font-normal font-semibold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tighter my-4">Insights and Inspiration: Unleashing the Potential of AI in Our &nbsp;
                    <span class="font-inter font-normal font-semibold text-center text-transparent  text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Latest Blog!</span>
                </h1>
                <h2 class="font-inter font-normal font-medium text-sm sm:text-sm emd:text-base lg:text-base text-center text-green-50 ">Stay in the Loop! Subscribe to Our Blog and Receive Exclusive Insights, Tips, and Inspiration Straight to Your Inbox.</h2>
                <div className='max-w-md w-full relative mt-16 mx-auto'>
                <input type="email" class="w-full pl-2 py-4 pr-8  rounded-lg font-inter font-normal bg-transparent border border-gray-500  text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-500" placeholder="Enter Your Email" />
                <button className={`top-1  ${currentlang == 'ar' ? "left-1" : "right-1" } flex justify-center absolute w-32 h-11 mt-1  mr-1 items-center btn-green border-0  shadow-xs rounded-lg text-white  text-base`}>
                Subscribe
              </button>
                </div>
            </div>

        </div>
    )
}

export default Header