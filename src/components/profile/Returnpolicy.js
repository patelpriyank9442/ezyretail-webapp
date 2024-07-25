import React from 'react'
import editIcon from '../../assets/images/editIcon.svg';

export default function ReturnPolicy() {
    const sections = [
        {
            title: "Lorem ipsum dolor",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            title: "Lorem ipsum dolor",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        }
    ];

    return (
        <>
            <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px]">
                <div className="space-y-[25px]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] capitalize">Return Policy</h3>
                        <button
                            type="button"
                            className="rounded-full h-fit flex justify-center items-center gap-1.5 font-[oswald] uppercase bg-gray-100 p-2.5 w-44 text-[17px] font-bold text-gray-300 leading-[25px] tracking-[0.02em]"
                        >
                            <img src={editIcon} className='h-4 w-4 invert' alt='favourite' />
                            edit
                        </button>
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className='space-y-2.5'>
                            <h3 className='text-gray-300 font-bold lg:text-[19px] text-[17px] leading-[22px] tracking-[0.01em]'>{section.title}</h3>
                            <div className='space-y-10'>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className='text-gray-200 lg:text-[17px] text-base font-normal lg:leading-[27px] leading-[22px]'>{paragraph}</p>
                                ))}
                            </div>
                            <div className='space-y-10'>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className='text-gray-200 lg:text-[17px] text-base font-normal lg:leading-[27px] leading-[22px]'>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}