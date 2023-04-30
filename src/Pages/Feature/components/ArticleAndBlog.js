import React from 'react'
import FeatureCard from './FeatureCard'

const ArticleAndBlog = ({title}) => {
  return (
    <div className="bg-transparent py-20">
    <h1 className="font-inter font-medium text-4xl text-green-200 leading-9 md:leading-10 tracking-tighter mb-11 heading-under-line relative">{title}</h1>
    <div className="grid grid-cols-3 gap-y-6 sm:gap-x-0 sm:gap-y-10  md:gap-x-0 md:gap-y-10 lg:gap-x-14 lg:gap-y-10">
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
            <FeatureCard/>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
        <FeatureCard/>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
        <FeatureCard/>

        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
            <FeatureCard/>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
        <FeatureCard/>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1">
        <FeatureCard/>
        </div>
    </div>
</div>
  )
}

export default ArticleAndBlog