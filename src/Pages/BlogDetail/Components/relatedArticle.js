import React from "react";
import ArticleCard from "./articleCard";

const RelatedArticle = () => {
  return (
    <div className="bg-transparent py-8">
      <h1 className="font-inter font-medium text-4xl text-green-200 leading-9 md:leading-10 tracking-tighter mb-11">
        Related Articles
      </h1>
      <div className="grid grid-cols-3 gap-6 sm:gap-y-6  md:gap-2 lg:gap-6">
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <ArticleCard />
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <ArticleCard />
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
