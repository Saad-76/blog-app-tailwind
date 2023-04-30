import React from "react";
import { ImPower } from "react-icons/im";
import { MdOutlineRocketLaunch } from "react-icons/md";

const BusinessCard = () => {
  return (
    <>
      <div class="relative border border-green-800 business-card-active p-4 rounded-lg p-6 ">
        <div class="absolute -top-4 right-10 h-8 w-50 font-inter font-medium text-white px-4 py-1 text-base rounded-lg btn-business bg-opacity-10  flex-inline justify-center">
          Pricing & plans
        </div>
        <h2 class="text-3xl font-bold text-white pt-2">Business</h2>
        <p class="text-sm dark-gray leading-6 mt-2">
          Best for growing teams scaling creatives, <br /> social, blogs.
        </p>
        <p class="text-base text-white leading-6 mt-6">
          <span class="text-5xl font-bold ">$20</span>
          <sub class="text-sm">/Month</sub>
        </p>
        <p class="text-xl text-orange-400 leading-6 mb-2 relative mt-3">
          <span class="relative inline-block">
            <span class=" px-1">$50 /Month</span>
            <span class="absolute top-1/2 left-0 right-0 h-1 bg-orange-400 transform -translate-y-1/2"></span>
          </span>
        </p>

        <div class="flex items-center py-6">
          <hr class="flex-grow border-t border-gray-400" />
          <div class="-ml-2 -mr-2 bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center">
            <span class="text-gray-800 font-bold text-lg"></span>
          </div>
          <hr class="flex-grow border-t border-gray-400" />
        </div>

        <p class="text-sm dark-gray leading-6 mt-2">
          Try out all features to determine what works <br /> best for you{" "}
        </p>
        <p class="text-sm text-green-400 leading-6 mt-2">200,000 words</p>

        <div class="flex justify-center items-center my-8">
          <button class="flex w-full  items-center justify-center border pricing-border pricing-btn-color font-medium font-inter font-normal text-lg leading-6 rounded-lg py-2 ">
            <MdOutlineRocketLaunch />
            Try it Now
          </button>
        </div>

        <p class="text-lg text-white leading-6 mt-2">
          Ecommerce Product &nbsp;{" "}
          <span>
            <br /> Descriptions
          </span>
        </p>

        <p class="flex items-center text-sm text-green-500 mt-2 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm text-green-500 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm text-green-500 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm text-green-500 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm text-green-500 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm text-green-500 py-2">
          <ImPower />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
      </div>
    </>
  );
};
export default BusinessCard;
