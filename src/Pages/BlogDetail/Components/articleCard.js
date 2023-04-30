import React from "react";

const ArticleCard = () => {
  return (
    <div className="bg-transparent grid grid-cols-3 gap-0 md:gap-4">
      <div className="col-span-3 md:col-span-1 lg:col-span-3">
        <div class="h-52 sm:h-80 md:h-48 lg:h-64 rounded-lg bg-gray-300 mb-4">
          <img
            src="https://images.unsplash.com/photo-1542315204-8b368472a4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Image"
            className="object-fill h-full w-full rounded-lg"
          />
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-3">
        <label class="font-inter font-normal text-sm text-gray-300">
          Erzi Hutama 20 Jan 2022
        </label>
        <h1 class="font-inter font-medium text-base text-white my-2 line-clamp-2">
          Tips and Tricks for Crafting Copywriting with AI: Unlocking the Power
          of Artificial...
        </h1>
        <p class="font-inter font-normal text-xs  text-gray-300 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Vitae nascetur ultrices sed
          ornare augue faucibus quam. Mi pretium turpis ut feugiat eget
          convallis.
        </p>
        <span class="font-medium text-xs border border-gray-300 text-gray-300 inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">
          Copywriting
        </span>
        <span class="font-medium text-xs border border-gray-300 text-gray-300 inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">
          Al Blog
        </span>
        <span class="font-medium text-xs border border-gray-300 text-gray-300 inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">
          Al Copy
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
