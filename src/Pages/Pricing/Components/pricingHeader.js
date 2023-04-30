import React from 'react'

const PricingHeader = () => {
    return (
        <div className='py-20 w-full flex justify-center items-center'>
            <div className='text-center'>
                <label class="font-inter font-medium text-white px-4 py-1 text-lg rounded-lg bg-white bg-opacity-10  flex-inline justify-center">Pricing & plans</label>
                <h1 class="font-inter font-normal font-semibold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tighter my-4">Transparent Pricing: Get the Best Value for Your Investment with &nbsp;
                    <span class="font-inter font-normal font-semibold text-center text-transparent  text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Our AI Product!</span>
                </h1>
                <div className='max-w-sm w-full relative mt-16 mx-auto border-lg border-first flex justify-between p-2 border-radius-100 items-center'>
                    <span class="font-inter font-medium light-green text-base ms-3">
                        Billed Monthly
                    </span>
                    <span class="font-inter font-medium light-green text-base bg-black-dark px-3 py-1 border-radius-100">
                        Billed Yearly  &nbsp;
                        <span className='text-green'>
                            20% OFF

                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PricingHeader