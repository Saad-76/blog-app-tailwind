import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewMidCard = () => {
  return (
    <>
      <div class="w-90 lg:h-80 md:h-72 h-84 review-card-back rounded-2xl p-6 ">
        <div class="flex justify-between text-center items-center ">
          <div class="flex items-center space-x-4 ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="User Avatar"
              class="rounded-full w-10 h-10"
            />
            <div class="flex flex-col">
              <span class="text-white">Erzi Hutama</span>
              <span class="text-sm text-gray-400">CTO AT GIT</span>
              <div className="flex items-center pt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <div class="">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.UxWb5KwRu13y0vokkgvfXQAAAA&pid=Api&P=0"
              alt="User Avatar"
              class="rounded-full w-10 h-10"
            />
          </div>
        </div>
        <h1 class="font-inter font-semibold text-base text-white pt-5">
          Demo paragraph just can't get enough want to get a Shirt.
        </h1>
        <p class="font-inter font-normal  md:text-base	  lg:text-sm leading-relaxed text-sm leading-6 font-gray pt-3 line-clamp-9">
          And I can confirm that from the moment I logged in. Simplified offer a
          nicely Dashboard with rich content, including links to various handy
          templates, and set up fundamental things I need to create great
          content.When I digged deep into the app, it is an amazing experiences.{" "}
        </p>
      </div>
    </>
  );
};
export default ReviewMidCard;
