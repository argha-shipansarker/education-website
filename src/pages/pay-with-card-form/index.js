import React from 'react'
import AboutCompanyDonationPage from '../../components/donation-Page/about-company'

const DonationRecievingForm = () => {
    return (
        <div>
            <AboutCompanyDonationPage />

            <div className='px-78 py-20'>
                <p className='text-3.5xl leading-12 font-semibold'>Pay with Your Card</p>
                <p className='leading-6 mt-3 text-mutedTextColor'>Enter the credit card details for payment</p>

                <div className='mt-10'>
                    <label className='text-sm leading-6 font-semibold'>Donation Amount</label>
                    <div className='relative mt-1'>
                        <input type="text" className='w-full h-14 border-1 mt-2 focus:outline-none pl-10 rounded-lg' placeholder='Donation Amount' />
                        <div className='absolute left-3' style={{ top: 25 }}>
                            <p className='font-semibold leading-6'>$</p>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>


        </div>
    )
}

export default DonationRecievingForm