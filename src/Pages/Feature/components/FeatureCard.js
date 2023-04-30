import React from 'react'
import fileIcon from "../../../assets/featureIcons/file.svg"
import current from "../../../assets/featureIcons/current.svg"

const FeatureCard = () => {
    return (
        <div className='rounded-lg p-6 preview-card-border bg-dark'>
            <div className='flex justify-between items-center'>
                <button className="w-[3.25rem] h-[3.25rem] bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30">
                    <img src={fileIcon} alt="file icon" className='ms-[5.5px]' />
                </button>
                <div className='flex justify-center items-center cursor-pointer'>
                    <span class="font-inter font-normal font-medium text-sm text-green whitespace-pre me-2">see details</span>
                    <img src={current} alt="icon" />
                </div>
            </div>
            <h1 class="font-inter font-normal font-medium text-lg light-green mt-6 mb-4">Write content that converts</h1>
            <p class="font-inter font-normal text-sm leading-5">Our AI sidekick is an expert at producing high-converting content that can take your business to the next level.</p>
        </div>
    )
}

export default FeatureCard