import React, { useEffect, useRef, useState } from "react";
import star from '../../../src/assets/images/star.svg';
import grayStar from '../../../src/assets/images/grayStar.svg';
import chevronDown from '../../../src/assets/images/chevronDown.svg';
import feedbackUser from '../../../src/assets/images/feedbackUser.svg';
import product from '../../../src/assets/images/product.svg';

export default function ReviewTab() {
    const [activeTab, setActiveTab] = useState('product description');
    const dropdownRef = useRef(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const options = [
        { value: "top", label: "Top Feedbacks" },
        { value: "recent", label: "Recent Feedbacks" },
        { value: "text", label: "Text Feedbacks Only" },
        { value: "image", label: "Image Feedbacks Only" },
    ];

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleMouseDown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    const feedbacks = [
        {
            name: 'Courtney Henry',
            date: '01/07/2023',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Courtney Henry',
            date: '01/07/2023',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'Courtney Henry',
            date: '01/07/2023',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    const tabs = ['product description', 'customer feedbacks'];

    const sections = [
        {
            title: 'About Product',
            content: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ]
        },
        {
            title: 'Material & Design',
            content: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ]
        },
        {
            title: 'How to Care',
            content: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ]
        }
    ];

    return (
        <>
            <div className='container mx-auto xl:px-0 px-[18px] py-[50px]'>
                <div className="flex flex-col w-full overflow-hidden">
                    <div className="lg:mb-[50px] mb-[25px]">
                        <div className='md:gap-[25px] gap-2.5 md:p-2.5 p-2 flex border-[1.5px] rounded-[500px] border-gray-300'>
                            {tabs.map((tab) => (
                                <button key={tab} onClick={() => handleTabClick(tab)} className={`w-full py-[18px] md:px-5 rounded-[50px] cursor-pointer md:font-medium font-semibold md:text-[22px] text-[17px] leading-[22px] tracking-[0.02em] capitalize ${activeTab === tab ? 'bg-gray-300 text-white' : 'text-gray-300'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    {activeTab === 'product description' && (
                        <>
                            <div className='grid md:grid-cols-3 grid-cols-1'>
                                {sections.map((section, index) => (
                                    <div key={index} className='md:border-r-[1.5px] border-gray-200 md:mr-[25px] md:pr-[25px] md:border-b-0 border-b-[1.5px] md:pb-0 md:mb-0 pb-5 mb-5 last:border-0 last:pr-0 last:mr-0 last:pb-0 last:mb-0'>
                                        <h2 className="font-[Oswald] lg:text-[27px] text-[22px] text-gray-300 font-bold lg:leading-[35px] leading-[28px] tracking-[0.01em] uppercase mb-5">{section.title}</h2>
                                        {section.content.map((paragraph, idx) => (
                                            <p key={idx} className={`text-gray-200 font-normal lg:text-[17px] text-base lg:leading-[27px] leading-[25px] ${idx > 0 ? 'lg:mt-4 mt-2' : ''}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {activeTab === 'customer feedbacks' && (
                        <>
                            <div className='flex gap-2.5 overflow-x-scroll hide-scroll'>
                                <button className='py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-base leading-[20px] tracking-[0.02em]'>#Quality</button>
                                <button className='py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-base leading-[20px] tracking-[0.02em]'>#Comfort</button>
                                <button className='py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-base leading-[20px] tracking-[0.02em]'>#Value</button>
                                <button className='py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-base leading-[20px] tracking-[0.02em]'>#Fit</button>
                                <button className='py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-base leading-[20px] tracking-[0.02em]'>#Color</button>
                            </div>
                            <div className='relative md:w-[276px] h-full md:my-[25px] my-5' ref={dropdownRef}>
                                <button
                                    type="button"
                                    className={`w-full text-[17px] flex items-center justify-between font-normal ${selectedOption ? 'text-gray-300' : 'text-gray-200'} px-[15px] md:py-[18px] py-3.5 border-[1.5px] bg-white border-gray-200 rounded-[15px] focus:outline-none`}
                                    onClick={toggleDropdown}
                                >
                                    {selectedOption ? selectedOption.label : 'All feedbacks'}
                                    <img src={chevronDown} alt="" />
                                </button>
                                {isOpen && (
                                    <div className="bg-gray-100 absolute w-full z-10 border border-gray-300 rounded-[15px] mt-[15px]">
                                        <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {options.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => handleOptionSelect(option)}
                                                    className="block px-[15px] py-[13px] text-base text-gray-300 font-normal w-full text-start border-b border-gray-300 leading-[22px] last:border-b-0"
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {feedbacks.map((feedback, index) => (
                                    <div key={index} className='flex gap-2.5 border-b-[1.5px] border-gray-300 mb-[25px] pb-[25px] last:pb-0 last:border-b-0'>
                                        <div className='bg-gray-300 rounded-full w-full md:max-w-[42px] max-w-[35px] md:h-[42px] h-[35px] flex items-center justify-center'>
                                            <img src={feedbackUser} alt='img' className='invert md:h-auto md:w-auto h-4 w-4' />
                                        </div>
                                        <div className="w-full">
                                            <p className='text-gray-300 font-medium md:text-[19px] text-[17px] md:leading-[28px] leading-[25px]'>{feedback.name}</p>
                                            <div className="flex md:gap-2 gap-[5px] mt-[5px]">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={grayStar} alt="" />
                                            </div>
                                            <p className='text-black font-normal text-base leading-[22px] mt-3 overflow-hidden md:line-clamp-none line-clamp-3'>
                                                {feedback.review}
                                            </p>
                                            <p className="text-gray-300 font-medium text-[15px] leading-[18px] mt-[5px] underline md:hidden">Read more</p>
                                            <div className='flex sm:gap-[15px] gap-2.5 md:mt-[15px] mt-3'>
                                                <img
                                                    src={product}
                                                    alt="img"
                                                    className="lg:h-[130px] lg:w-[130px] h-[70px] w-[70px] lg:rounded-[18px] rounded-[12px] object-cover"
                                                />
                                                <img
                                                    src={product}
                                                    alt="img"
                                                    className="lg:h-[130px] lg:w-[130px] h-[70px] w-[70px] lg:rounded-[18px] rounded-[12px] object-cover"
                                                />
                                            </div>
                                            <p className='text-gray-300 font-medium text-[15px] leading-[22px] mt-3'>{feedback.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center'>
                                <button className='font-[Oswald] font-semibold md:text-[22px] text-[17px] md:leading-[32px] leading-[25px] tracking-[0.02em] uppercase border border-gray-300 rounded-[500px] md:py-[18px] py-3 md:px-[30px] px-[22px]'>More Feedbacks</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}