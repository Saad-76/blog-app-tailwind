import React from "react";
import ReviewSideCard from "./reviewSideCard";
import ReviewMidCard from "./reviewMidCard";

const Review = () => {
  return (
    <div class="mt-20">
      <label class="font-inter font-medium text-white px-4 py-1 text-lg rounded-lg bg-white bg-opacity-10  flex-inline justify-center">
        Unlocking Limitless Possibilities: Discover the
        <span class="text-blue-400">New Features</span>
      </label>

      <h1 class="font-inter font-normal font-semibold  text-white text-4xl sm:text-4xl md:text-4xl lg:text-4xl tracking-tighter mb-8 mt-4">
        What Our 100 million+ Users Say About KHUDI
      </h1>

      <div class="flex flex-col  md:flex-col lg:flex-row   lg:space-x-4  md:space-y-4 space-y-4 ">
        <div class="flex-auto lg:w-20 space-x-4 ">
          <div class="flex flex-col space-y-4">
            <div>
              {" "}
              <ReviewSideCard />
            </div>
            <div>
              {" "}
              <ReviewSideCard />
            </div>
            <div>
              {" "}
              <ReviewSideCard />
            </div>
          </div>
        </div>
        <div class="flex-auto lg:w-60 space-x-4 ">
          <div class="flex flex-col space-y-4">
            <div>
              <ReviewMidCard />
            </div>
            <div>
              <ReviewMidCard />
            </div>
            <div>
              <ReviewMidCard />
            </div>
          </div>
        </div>
        <div class="flex-auto lg:w-20 space-x-4 ">
          <div class="flex flex-col space-y-4">
            <div>
              <ReviewSideCard />
            </div>
            <div>
              <ReviewSideCard />
            </div>
            <div>
              <ReviewSideCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
