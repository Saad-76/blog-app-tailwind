import React from 'react'
import khudai from "../assets/KhudiLogo.svg"
import twitter from "../assets/footerIcons/twitter.svg"
import linkedIn from "../assets/footerIcons/linkdin.svg"
import fb from "../assets/footerIcons/fb.svg"
import github from "../assets/footerIcons/github.svg"
import victory from "../assets/footerIcons/vic.svg"
import dribble from "../assets/footerIcons/dribble.svg"
import { MdOutlineRocketLaunch } from 'react-icons/md';

const Footer = () => {
    const resourceLink = ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"];
    const fetureLink = ["About us", "Careers", "Press", "News", "Media kit", "Contact"];
    const priceLink = ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"];


    return (
        <div className="pt-20">
            <div className='flex justify-between items-center flex-col sm:flex-row'>
            <h1 className="font-inter font-medium text-3xl text-white">Let's Start Going Beyond Limits!</h1>
            <button className='btn  font-inter font-normal text-white flex items-center mt-4 sm:mt-0 md:mt-0 lg:mt-0'>
                <MdOutlineRocketLaunch style={{color:"#62FE76",marginRight:"10px"}}/>
                    <span class="font-inter font-normal font-semibold text-left text-transparent tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text whitespace-pre">Try It Now</span>
                        </button>
            </div>
            <p className="font-inter font-normal text-xl text-ligh-green mt-4">
                Join over 4,000+ startups already growing with KHUDI.
            </p>
            <hr class="h-px border-0 bg-green-800 my-16"></hr>
            <div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-12 lg:col-span-4">
                        <img src={khudai} alt="logo" />
                        <p className="font-inter font-normal text-base text-ligh-green mt-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-3">
                        <span class="font-inter font-semibold text-sm text-green-400 flex mb-4">Resources</span>

                        {resourceLink.map((linkName) => {
                            return (
                                <a href="#" class="font-inter font-semibold text-base text-ligh-green hover:text-green-600 mt-3 flex">{linkName}</a>
                            )
                        })}
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-3">
                        <span class="font-inter font-semibold text-sm text-green-400 flex mb-4">Features</span>

                        {fetureLink.map((linkName) => {
                            return (
                                <a href="#" class="font-inter font-semibold text-base text-ligh-green hover:text-green-600 mt-3 flex">{linkName}</a>
                            )
                        })}
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-2">
                        <span class="font-inter font-semibold text-sm text-green-400 flex mb-4">Pricing</span>

                        {priceLink.map((linkName) => {
                            return (
                                <a href="#" class="font-inter font-semibold text-base text-ligh-green hover:text-green-600 mt-3 flex">{linkName}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr class="h-px border-0 bg-green-800 mt-16"></hr>
            <div className='py-8'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                        <p className="font-inter font-normal text-base text-green-300 text-center sm:text-left md:text-left lg:text-left">
                            © 2023 Khudi. All rights reserved.
                        </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
                        <div className='flex justify-center sm:justify-end md:justify-end lg:justify-end'>
                        <img src={twitter} alt="twitter logo"/>
                        <img src={linkedIn} alt="linkedIn logo" className='ms-6'/>
                        <img src={fb} alt="facebook logo" className='ms-6'/>
                        <img src={github} alt="victory logo" className='ms-6'/>
                        <img src={victory} alt="victory logo" className='ms-6'/>
                        <img src={dribble} alt="dribble logo" className='ms-6'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer