import React from 'react'
import FeatureHeader from './components/FeatureHeader'
import ArticleAndBlog from './components/ArticleAndBlog'
import Footer from '../../Shared-Components/Footer'
import CreateContent from '../Pricing/Components/createContent'
import NavBar from '../NavBar'

const Feature = () => {
  const TitleArray=['Articles and Blogs','Ecommerce Product Descriptions','Ads and Marketing Tools','Other Feature']
  return (
    <div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28 bg-black'>
        <NavBar/>
        <FeatureHeader />
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#0A0D0E",borderRadius: "60px 60px 0px 0px"}}>
        {TitleArray.map((title)=>(
          <ArticleAndBlog title={title}/>
        ))}
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#0A0D0E" }}>
      <CreateContent />
      </div>
      <div className='px-6 sm:px-16 md:px-16 lg:px-28' style={{ background: "#0A0D0E" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Feature