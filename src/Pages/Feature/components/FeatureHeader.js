import React from 'react'

const FeatureHeader = () => {
    return (
        <div className='py-20 w-full bg-black flex justify-center'>
            <div>
                <label class="font-inter font-normal text-white text-lg ">Khudi AI Feature</label>
                <h1 class="font-inter font-normal font-semibold text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter my-4 line-height-90">Discover the Power of AI: Features that Make Our  &nbsp;
                    <span class="font-inter font-normal font-semibold text-left text-transparent  text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Product Stand Out!</span>
                </h1>
                <div class="flex flex-wrap justify-left items-center mt-5">
                    <button className='btn me-3 sm:me-4  mt-3  md:me-10 sm:mt-4 font-inter font-normal text-white '>
                    <span class="font-inter font-normal font-semibold text-left text-transparent tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Articles and Blogs</span>
                        </button>
                    <label class="font-inter font-normal text-white px-6 border-second py-3 text-base rounded-lg near-black flex-inline justify-center me-3 sm:me-4  mt-3  md:me-10 sm:mt-4">Ecommerce Product Descriptions</label>
                    <label class="font-inter font-normal text-white px-6 border-second py-3 text-base rounded-lg near-black flex-inline justify-center me-3 sm:me-4   mt-3  md:me-10 sm:mt-4">Ads and Marketing Tools</label>
                    <label class="font-inter font-normal text-white px-6 border-second py-3 text-base rounded-lg near-black flex-inline justify-center  me-3 sm:me-4  mt-3 md:me-10 sm:mt-4">Other Features</label>
                </div>
            </div>
        </div>
    )
}

export default FeatureHeader