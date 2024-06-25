import React from 'react';
import returnIcon from '../../../src/assets/images/returnIcon.svg';
import shipping from '../../../src/assets/images/shipping.svg';
import refund from '../../../src/assets/images/refund.svg';

export default function Benefit() {
    const data = [
        {
            icon: returnIcon,
            title: '7 Days',
            description: 'You are allowed to return product within 7 days.',
        },
        {
            icon: shipping,
            title: 'Free Shipping',
            description: 'You’ll be not get paid on your first order from our site.',
        },
        {
            icon: refund,
            title: '1 day refund',
            description: 'Get refund on the same day when you return the product.',
        },
    ];
    return (
        <>
            <div className="w-full bg-gray-300">
                <div className='container mx-auto xl:px-0 px-[18px] py-20'>
                    <div className='flex flex-wrap justify-around'>
                        {data.map((item, index) => (
                            <div key={index} className='w-[343px] sm:mb-10 mb-[50px]'>
                                <div className='flex flex-col items-center'>
                                    <div className='lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] lg:p-2.5 md:p-1.5 p-4 bg-gray-200 border border-gray-100 rounded-full flex items-center justify-center'>
                                        <img src={item.icon} className='h-auto w-auto' alt='img' />
                                    </div>
                                    <div className='sm:mt-5 mt-[18px]'>
                                        <h1 className='text-white flex justify-center font-[oswald] font-bold sm:text-[30px] text-[25px] leading-[44px]'>{item.title}</h1>
                                        <p className='text-gray-200 pt-[5px] flex text-center font-medium text-lg leading-[19px]'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}