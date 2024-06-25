import React from 'react'
import ezyRetail from '../../../src/assets/images/ezyRetail.svg'
import instagramIcon from '../../../src/assets/images/instagramIcon.svg'
import facebookIcon from '../../../src/assets/images/facebookIcon.svg'

export default function Footer() {
    const sections = [
        {
            title: "shop",
            items: [
                { text: "Men’s fashion", link: "/" },
                { text: "Women’s fashion", link: "/" },
                { text: "Kid’s fashion", link: "/" },
                { text: "Our collections", link: "/" }
            ]
        },
        {
            title: "Support",
            items: [
                { text: "Return product", link: "/" },
                { text: "replace product", link: "/" },
                { text: "Track order", link: "/" },
                { text: "Contact Us", link: "/" }
            ]
        },
        {
            title: "About Us",
            items: [
                { text: "Know Us", link: "/contact-us" },
                { text: "Return & Refund Policy", link: "/support" },
                { text: "Privacy Policy", link: "/careers" },
                { text: "T&C", link: "/" }
            ]
        }
    ];
    return (
        <footer className="w-full bg-white">
            <div className='border-t-[1.5px] border-gray-300'>
                <div className='container mx-auto'>
                    <div className="flex flex-col items-start md:flex-row sm:py-[50px] py-10">
                        <div className="w-full px-4 md:w-1/2 xl:px-0 px-[18px]">
                            <div className='w-fit flex flex-col sm:gap-5 gap-[15px] sm:items-center xl:px-[51px]'>
                                <img src={ezyRetail} alt='ezy-retail-logo' className='h-auto sm:w-[288px] w-[195px]' />
                                <p className='font-normal sm:text-[21px] leading-[26px] text-gray-300 text-[17px]'>Where make your own style..</p>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-2 sm:gap-6 gap-[30px] md:mt-0 lg:w-3/4 lg:grid-cols-3 xl:px-0 px-[18px] sm:w-revert-layer w-full">
                            {sections.map((section, i) => (
                                <div key={i}>
                                    <p className="mb-2.5 sm:mb-6 font-[Oswald] font-semibold sm:text-3xl text-[22px] sm:leading-[44px] leading-8 tracking-[2%] text-gray-300 uppercase">
                                        {section.title}
                                    </p>
                                    <ul className="flex flex-col sm:space-y-2.5 space-y-2 sm:text-lg text-[15px] font-normal leading-[22px] text-gray-300">
                                        {section.items.map((item, j) => (
                                            <li key={j}>
                                                <a href={item.link} className="hover:underline">
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center justify-between sm:pb-[30px] pb-5 xl:px-0 px-[18px]'>
                        <div>
                            <p>
                                <a href="/" className='font-normal leading-[22px] sm:text-lg text-base text-gray-300'>Privacy policy</a>
                                <span className='inline-block bg-gray-300 h-[6.67px] w-[6.67px] rounded-full sm:mx-3 mx-2.5'></span>
                                <a href="/" className='font-normal leading-[22px] sm:text-lg text-base text-gray-300'> Terms of use</a>
                            </p>
                        </div>
                        <div className='flex sm:gap-6 gap-3 items-center'>
                        <img src={instagramIcon} alt='instagramIcon' className='h-auto sm:w-5 w-[18px]'/>
                        <img src={facebookIcon} alt='facebookIcon' className='h-auto sm:w-5 w-[18px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
