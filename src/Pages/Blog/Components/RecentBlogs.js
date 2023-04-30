import React from 'react'
import VerticaleBlogCard from './VerticaleBlogCard'
import BlogCardLarge from './BlogCardLarge'
import pic1 from "../../../assets/images/pic1.png"
import pic2 from "../../../assets/images/pic2.png"
import pic3 from "../../../assets/images/picc3.png"


const RecentBlogs = () => {
  return (
    <div className="bg-transparent py-20">
      <h1 className="font-inter font-medium text-4xl text-green-200  tracking-tighter mb-11">Recent blog post</h1>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-10">
  <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-5">
    <BlogCardLarge />
  </div>
  <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-7">
    <div class="grid grid-cols-1 gap-6 sm:gap-6 md:gap-2 lg:gap-3">
      <div class="col-span-1">
        <VerticaleBlogCard img={pic1}/>
      </div>
      <div class="col-span-1">
        <VerticaleBlogCard img={pic2}/>
      </div>
      <div class="col-span-1">
        <VerticaleBlogCard img={pic3}/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default RecentBlogs