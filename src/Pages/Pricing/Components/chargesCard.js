import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineRocketLaunch } from "react-icons/md";

const ChargesCard = () => {
  return (
    <>
      <div class="relative  p-4 p-6     border-green-800 p-4 rounded-lg  lg:border-green-0 md:border-green-800">
        <h2 class="text-3xl font-bold text-white pt-2">Custom</h2>
        <p class="text-sm dark-gray leading-6 mt-2">
          Best for growing teams scaling creatives, <br /> social, blogs.
        </p>
        <p class="text-base text-white leading-6 mt-6">
          <span class="text-5xl font-bold ">Free</span>
        </p>
        <p class="text-xl text-white leading-6 mb-2 relative mt-3">
          <span class="relative inline-block">
            <span class=" px-1">Forever</span>
          </span>
        </p>

        <div class="flex items-center py-6 ">
          <div class="hidden lg:hidden">
            <hr class="flex-grow border-t border-gray-400" />
            <div class="-ml-2 -mr-2 bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center">
              <span class="text-gray-800 font-bold text-lg"></span>
            </div>
            <hr class="flex-grow border-t border-gray-400" />
          </div>
        </div>

        <p class="text-sm dark-gray leading-6 mt-11">
          Try out all features to determine what works <br /> best for you{" "}
        </p>
        <p class="text-sm text-green-400 leading-6 mt-2">200,000 words</p>

        <div class="flex justify-center items-center my-8">
          <button class="flex w-full pricing-btn-color  items-center justify-center border pricing-border font-medium font-inter font-normal text-lg leading-6 rounded-lg py-2 ">
            <MdOutlineRocketLaunch />
            Sign In
          </button>
        </div>

        <p class="text-lg text-white leading-6 mt-2">
          Ecommerce Product &nbsp;{" "}
          <span>
            <br /> Descriptions
          </span>
        </p>

        <p class="flex items-center text-sm pricing-chat-clr mt-2 py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm pricing-chat-clr py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm pricing-chat-clr py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm pricing-chat-clr py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm pricing-chat-clr py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
        <p class="flex items-center text-sm pricing-chat-clr py-2">
          <GoPrimitiveDot />
          <span class="px-2"> ChatSonic: ChatGPT-like chatbot</span>
        </p>
      </div>
    </>
  );
};
export default ChargesCard;
