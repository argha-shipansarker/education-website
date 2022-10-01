import React from 'react'
import HomePageBanner from '../../components/homepage-banner'
import CompanyAbout from '../../components/company-about'
import BoardOfLeaders from '../../components/company-board-of-leaders'
import CompanyMission from '../../components/company-mission'
import CompanyProcess from '../../components/company-process'

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <CompanyAbout />
      <BoardOfLeaders />
      <CompanyMission />
      <CompanyProcess />
    </div>
  )
}

export default HomePage