import React from 'react'

const BlogCardLarge = () => {
    return (
        <div className='bg-transparent'>
            <div class="h-52 sm:h-96 md:h-[30rem] lg:h-96 rounded-lg bg-gray-300 mb-4">
                <img src="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80" alt="Image" className='object-cover h-full w-full rounded-lg' />
            </div>
            <label class="font-inter font-normal text-base font-gray">Erzi Hutama 20 Jan 2022</label>
            <h1 class="font-inter font-medium text-2xl text-white my-4 line-clamp-2">
                Tips and Tricks for Crafting Copywriting with AI: Unlocking the Power of Artificial...
            </h1>
            <p class="font-inter font-normal text-base leading-5 line-clamp-3">Lorem ipsum dolor sit amet consectetur. Vitae nascetur ultrices sed ornare augue faucibus quam. Mi pretium turpis ut feugiat eget convallis.Lorem ipsum dolor sit amet consectetur. Vitae nascetur </p>
            <span class="font-medium text-xs border border-gray-300 font-gray inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">Copywriting</span>
            <span class="font-medium text-xs border border-gray-300 font-gray inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">Al Blog</span>
            <span class="font-medium text-xs border border-gray-300 font-gray inline-block text-center py-0.5 px-2 rounded-full mt-3 me-3">Al Copy</span>
        </div>
    )
}


export default BlogCardLarge