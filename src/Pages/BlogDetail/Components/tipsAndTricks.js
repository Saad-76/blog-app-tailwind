import React from "react";
import { BiArrowBack } from "react-icons/bi";
import google from "../../../assets/google.svg"
import roundArrow from "../../../assets/blogDetail/blogdetailroundArrow.svg"

const TipsAndTricks = () => {
    return (
        <>
            <div className="flex items-center pt-8">
                <BiArrowBack className="h-4 w-4 mr-2 text-green-500" />
                <p className="font-inter font-medium text-xs leading-4  text-green-500">
                    Back To blog
                </p>
            </div>
            <div className="flex flex-col items-center w-full mb-20">
                <div className="w-full h-full flex flex-col sm:flex-col md:flex-col lg:flex-row lg:ps-6">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-inter font-semibold text-3xl sm:text-6xl text-white leading-tight tracking-tighter lg:w-[111%] lg:z-50 pt-5 line-height-72">
                        Tips and Tricks for Crafting Copywriting with AI: Unlocking the Power of Artificial
                        </h1>
                        <p className="font-inter font-normal text-xl dark-grey py-6">
                            Collaboration can make our teams stronger WIth AI
                        </p>
                        <div class="flex items-center space-x-4 pt-3 pb-8 sm:py-6">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="User Avatar" class="rounded-full w-12 h-12" />
                            <div class="flex flex-col">
                                <span class="text-white">Erzi Hutama</span>
                                <span class="text-sm text-gray-400">Published 14 January, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-500 sm:h-[38rem] md:h-[38rem] lg:h-[37rem] md:w-full lg:w-[36rem] relative">
                            <img src="https://images.unsplash.com/photo-1542315204-8b368472a4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="User Avatar" className="h-full w-full object-cover" />
                            <img src={roundArrow} alt="arrow icon" className="blog-detail-arrow  hidden lg:block"/>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
};
export default TipsAndTricks;
