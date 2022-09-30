import React from 'react'
import HomePageBanner from '../../components/homepage-banner'
import CompanyAbout from '../../components/company-about'
import BoardOfLeaders from '../../components/company-board-of-leaders'

const HomePage = () => {
  return (
    <div>
        <HomePageBanner/>
        <CompanyAbout/>
        <BoardOfLeaders/>
    </div>
  )
}

export default HomePage