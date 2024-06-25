import React from 'react';
import shoes from '../../../src/assets/images/shoes.svg';

export default function Collection() {
    const data = [
        { title: 'Sneaker Collection', description: 'Step into Style: Where Comfort Meets Chic.' },
        { title: 'new launched', description: 'Discover the New: Embrace Trends, Rewrite Fashion.' },
        { title: 'summer collection', description: 'Beach Vibes: Unveiling Our Summer Collection.' },
    ];
    return (
        <>
            <div className='w-full bg-white'>
                <div className='container mx-auto xl:px-0 px-[18px] lg:py-[100px] py-[70px]'>
                    <div className='sm:w-2/4 w-full'>
                        <h1 className='text-gray-300 font-[oswald] font-bold xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[35px] xl:leading-[91px] lg:leading-[62px] sm:leading-[50px] leading-[45px] tracking-[0.01em] uppercase'>dive into our collections</h1>
                    </div>
                    <div className='lg:px-16 lg:pt-[100px] pt-10 sm:space-y-32 lg:space-y-40 space-y-[40px]'>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`md:flex gap-[40px] ${index === 1 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className='w-full max-w-[848px]'><img src={shoes} alt='img' className='w-[848px] h-auto' /></div>
                                <div className='sm:mt-0 mt-5'>
                                    <button
                                        type="button"
                                        className="rounded-full capitalize bg-gray-300 sm:px-5 px-3 sm:py-2.5 py-1.5 sm:text-lg text-[13px] sm:font-semibold font-medium text-white leading-[22px] tracking-[0.03em]"
                                    >
                                        {item.title}
                                    </button>
                                    <h1 className='text-gray-300 uppercase font-[oswald] font-normal sm:text-[50px] text-xl sm:leading-[70px] leading-[28px] sm:pt-5 pt-[8px]'>{item.description}</h1>
                                    <div className='sm:mt-[50px] mt-[15px]'>
                                        <button
                                            type="button"
                                            className="rounded-full font-[oswald] uppercase bg-transparent sm:px-[30px] px-[22px] sm:py-[15px] py-3 text-lg font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[26px] tracking-[0.02em]"
                                        >
                                            view collection
                                        </button>
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