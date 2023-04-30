import React from "react";
import { TiTick } from "react-icons/ti";
import laptop from "../../../assets/pricingIcons/Lapotp.svg"
import server from "../../../assets/pricingIcons/server.svg"
import right from "../../../assets/pricingIcons/right.svg"
import { CiCreditCardOff } from 'react-icons/ci';
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiOutlineSound} from 'react-icons/ai'


const CreateContent = () => {
	return (
		<div className="pt-20">
			<div className="flex justify-between">
				<div className="relative" >
					<div className="w-52 h-28">
						<img src={laptop} alt="image" className="object-fill w-full h-full" />
					</div>
					<div class="max-w[10rem] w-full mt-5" >
						<div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Device</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Abdullah MacBook Pro</span>
						</div>
						<div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Name</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Abdullah</span>
						</div><div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Question</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Keyboard SEO</span>
						</div>  
					</div>
				</div>
				<div className="w-full h-1 comprison-row relative mt-14"   >
					{/* <div class="h-14 w-14 comprison-row-icon">
						<img src={right} alt="image" />
					</div> */}
				</div>
				<div>
					<div className="w-52 h-28" >
						<img src={server} alt="image" className="object-fill w-full h-full" />
					</div>
					<div class="max-w[10rem] w-full mt-5" >
						<div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Device</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Abdullah MacBook Pro</span>
						</div>
						<div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Name</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Abdullah</span>
						</div><div className="w-full flex mb-3"> 
						<span className="font-medium drk-gray text-xs w-16 block" >Question</span>
						<span className="font medium drk-gray2 text-xs w-full text-end block"> Keyboard SEO</span>
						</div>  
					</div>
				</div>
			</div>
			<div className="my-6 sm:my-10 lg:w-[60%] mx-auto lg:-mt-28">
				<h1 class="font-inter font-normal font-medium text-3xl sm:text-6xl light-green text-center ">Struggling to Create Content? Our AI for Product is the Solution You Need!</h1>
			</div>
			<div class="flex lg:flex-row md:flex-col flex-col lg:py:0 py:2 px-0 lg:px:20 md:px:0 items-center lg:justify-center">
				<div class="my-2 sm:my-0 ">
					<label class="font-inter font-normal text-white px-4 py-1 text-lg rounded-lg bg-white bg-opacity-10  flex-inline justify-center flex items-center">
						<CiCreditCardOff  className="mr-2"/> 
						No credit card required.{" "}
					</label>
				</div>
				<div class="my-2 lg:my-0 mx-4">
					<label class="font-inter font-normal text-white px-4 py-1 text-lg rounded-lg bg-white bg-opacity-10  flex-inline justify-center flex items-center">
						<AiOutlineCalendar className="mr-2"/> 
						2,000 free words per month
					</label>
				</div>
				<div class=" my-2 sm:my-0">
					<label class="font-inter font-normal text-white px-4 py-1 text-lg rounded-lg bg-white bg-opacity-10  flex-inline justify-center flex items-center">
						<AiOutlineSound className="mr-2"/>
						90+ content types to explore
					</label>
				</div>
			</div>
		</div>
	);
};
export default CreateContent;
