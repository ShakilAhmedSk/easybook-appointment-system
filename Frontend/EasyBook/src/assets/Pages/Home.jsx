import React from 'react'
import Hero from '../Component/Hero'
import Features from '../Component/Features'
import HowItWorks from '../Component/HowItWorks'
import FAQ from '../Component/Faq'
import PartnerTestimonial from '../Component/PartnerTestimonial'
import UserFeedback from '../Component/UserFeedback'
import TrustedBy from '../Component/TrustedBy'
import LocationAvailability from '../Component/LocationAvailability'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <PartnerTestimonial></PartnerTestimonial>
      <TrustedBy></TrustedBy>
      <UserFeedback></UserFeedback>
      <FAQ></FAQ>
      <LocationAvailability></LocationAvailability>
      <Footer></Footer>
    </div>
  )
}

export default Home
