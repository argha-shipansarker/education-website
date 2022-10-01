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
            heading: "Deliver tools to school that help student success",
            description: "Deploying tools that empower teachers & students to fundraise at a local level",
            icon: GraduteLogo
        },
        {
            heading: "Solve Ongoing Education Issues",
            description: "Providing schools with database & community management systems.",
            icon: BookLogo
        }
    ]
    return (
        <div className='h-158.25 bg-lightBlueSectionBackground px-26 py-20'>
            <p className='text-5xl font-bold leading-16 text-center mb-27'>Our Mission</p>
            <div className='flex justify-between'>
                {
                    missionData.map((mission, index) => (
                        <div className='w-100 h-75.25 px-8 py-14 flex flex-col justify-end relative rounded-2xl bg-white mission-card'>
                            <p className='text-2xl font-bold leading-8 mb-8 text-center'>{mission.heading}</p>
                            <p className='leading-6 text-center'>{mission.description}</p>

                            <div className='h-30 w-30 absolute -top-15 left-35 rounded-full flex justify-center items-center bg-primaryColor mission-icon-div'>
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