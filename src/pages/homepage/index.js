import React from 'react'
import HomePageBanner from '../../components/homepage-banner'
import CompanyAbout from '../../components/company-about'
import BoardOfLeaders from '../../components/company-board-of-leaders'
import CompanyMission from '../../components/company-mission'
import CompanyProcess from '../../components/company-process'
import CompanyWorks from '../../components/company-works'
import CompanyFAQ from '../../components/company-faqs'
import StudentsRequirements from '../../components/students-reqirements'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomePageBanner />
      <CompanyAbout />
      <BoardOfLeaders />
      <CompanyMission />
      <CompanyProcess />
      <CompanyWorks />
      <CompanyFAQ />
      <StudentsRequirements />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage