import React from 'react'
import CameraLogo from "./camera.png"
import GraduteLogo from "./gradute.png"
import BookLogo from "./book.png"

const CompanyMission = () => {
    const missionData = [
        {
            heading: "Alleviate the 150B funding gap",
            description: "Launching national fundraisers to solve major causes",
            icon: CameraLogo
        },
        {
            heading: "Deliver tools to school that help",
            description: "Deploying tools that empower teachers & students",
            icon: GraduteLogo
        },
        {
            heading: "Solve Ongoing Education Issues",
            description: "Providing schools with database & community management systems.",
            icon: BookLogo
        }
    ]
    return (
        <div className='min-h-158.25 bg-lightBlueSectionBackground px-4 py-4 lg:px-26 lg:py-20'>
            <p className='text-5xl font-bold leading-16 text-center mb-27'>Our Mission</p>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 gap-20 md:gap-16 lg:gap-0 lg:flex lg:justify-between'>
                {
                    missionData.map((mission, index) => (
                        <div className='w-80 lg:w-100 h-75.25 px-8 py-14 flex flex-col justify-end relative rounded-2xl bg-white mission-card'>
                            <p className='text-2xl font-bold leading-8 mb-8 text-center'>{mission.heading}</p>
                            <p className='leading-6 text-center'>{mission.description}</p>

                            <div className='h-30 w-30 absolute -top-15 left-24 lg:left-35 rounded-full flex justify-center items-center bg-primaryColor mission-icon-div'>
                                <img src={mission.icon} alt="logo" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default CompanyMission