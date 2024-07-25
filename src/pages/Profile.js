import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import phoneIcon from '../../src/assets/images/phoneIcon.svg';
import mailIcon from '../../src/assets/images/mailIcon.svg';
import user from '../../src/assets/images/user.svg';
import editIcon from '../../src/assets/images/editIcon.svg';
import ProfileDetail from "../components/profile/ProfileDetail";
import MyOrders from "../components/profile/MyOrders";
import MyAddress from "../components/profile/MyAddress";
import ReturnPolicy from "../components/profile/Returnpolicy";

const profileTab = [
    {
        name: 'Profile details',
        href: '#',
    },
    {
        name: 'my orders',
        href: '#',
    },
    {
        name: 'my addresses',
        href: '#',
    },
    {
        name: 'Return policy',
        href: '#',
    },
    {
        name: 'refund policy',
        href: '#',
    },
    {
        name: 'Log Out',
        href: '#',
    },
]

export default function Profile() {
    const [activeTab, setActiveTab] = useState('Profile details');

    return (
        <>
            <div className='bg-slate h-auto'>
                <Header />
                <div className='container mx-auto xl:px-0 px-[18px]'>
                    <div className='flex mb-[23px]'>
                        <div className='flex gap-4 items-center'>
                            <img src={chevronLeft} className='h-auto w-auto' alt='favourite' />
                            <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to home</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">my profile</h1>
                    </div>
                    <div className="lg:mt-10 mt-5 mb-[52px]">
                        <div className="grid lg:grid-cols-6 gap-[30px]">
                            <div className="grid grid-cols-1 lg:col-span-2 col-span-4 relative">
                                <div className="bg-white rounded-[20px] lg:p-5 p-[15px] space-y-5 h-fit">
                                    <div className="flex gap-2.5">
                                        <div className="relative">
                                            <img src={user} alt='user' className="h-auto min-w-[70px]" />
                                            <div className="bg-gray-300 flex items-center justify-center rounded-full border-2 border-white h-[25px] w-[25px] absolute top-[57px] left-1/2 transform -translate-x-1/2">
                                                <img src={editIcon} alt="img" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <h3 className="font-[Oswald] font-semibold text-[22px] leading-[32px] tracking-[0.02em]">Chintan Ribadiya</h3>
                                            <div className="space-y-1">
                                                <div className="flex gap-1.5">
                                                    <img src={phoneIcon} alt="img" />
                                                    <p className="font-normal text-gray-200 text-base leading-5">+91 95374 73458</p>
                                                </div>
                                                <div className="flex gap-1.5">
                                                    <img src={mailIcon} alt="img" />
                                                    <p className="font-normal text-gray-200 text-base leading-5">chintanribadiya5215@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-300 my-[19px]"></div>
                                    <div className="grid gap-y-[5px]">
                                        {profileTab.map((item) => (
                                            <button
                                                key={item.name}
                                                className={`flex items-center p-[15px] text-sm font-semibold ${item.name === 'Log Out' ? 'text-alert-300' : 'text-gray-200'
                                                    }${activeTab === item.name ? ' bg-gray-300 text-white rounded-[500px]' : ''}`}
                                                onClick={() => setActiveTab(item.name)}>
                                                <span className="text-[17px] leading-[21px] tracking-[0.01em] font-medium capitalize">
                                                    {item.name}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-4 h-fit">
                                {activeTab === 'Profile details' && (
                                    <ProfileDetail />
                                )}
                                {activeTab === 'my orders' && (
                                    <MyOrders />
                                )}
                                {activeTab === 'my addresses' && (
                                    <MyAddress />
                                )}
                                {activeTab === 'Return policy' && (
                                    <ReturnPolicy />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}