import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from '../../../src/assets/images/dummy.svg';
import star from '../../../src/assets/images/star.svg';
import grayStar from '../../../src/assets/images/grayStar.svg';
import chevronLine from '../../../src/assets/images/chevronLine.svg';

export default function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="w-full bg-white">
                <div className='container mx-auto xl:px-0 px-[18px] sm:py-[100px] py-[70px]'>
                    <h1 className='text-gray-300 font-[oswald] font-bold xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[35px] xl:leading-[91px] lg:leading-[62px] sm:leading-[50px] leading-[45px] tracking-[0.01em] uppercase text-center'>The Truth of Testimony</h1>
                    <p className='text-gray-200 font-medium text-center text-[25px] leading-[31px] tracking-[0.01em]'>We are here today because of you!</p>
                    <div className='pt-[100px]'>
                        <div>
                            <div className="flex flex-col">
                                <Slider {...settings}>
                                    {[...Array(8)].map((_, index) => (
                                        <div key={index}>
                                            <div className='flex gap-2'>
                                                <img
                                                    src={dummy}
                                                    className="w-[45px] h-auto rounded-full"
                                                    alt='img'
                                                />
                                            <div className="flex flex-col flex-1 self-start">
                                                <div className="text-lg font-medium text-gray-300 leading-[22px]">
                                                    Jenny Wilson
                                                </div>
                                                <div className="flex gap-1.5 pr-14 max-md:pr-5">
                                                    <div className="flex gap-3">
                                                        <div className="flex gap-2">
                                                            <img src={star} alt="img" className='w-4 h-4' />
                                                            <img src={star} alt="img" className='w-4 h-4' />
                                                            <img src={star} alt="img" className='w-4 h-4' />
                                                            <img src={star} alt="img" className='w-4 h-4' />
                                                            <img src={grayStar} alt="img" className='w-4 h-4' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                <img src={chevronLine} alt='' className='mt-5' />
                                <div className='pt-10'>
                                    <p className='xl:w-[880px] mx-auto text-center font-normal text-xl leading-[25px]'>“Some 10 years back It was extremely difficult to get a piece which fits the space you make. Meubles has blown fresh air into this market which was stale with readymade standard furniture. Now you have tastefully designed, beautifully crafted custom furniture, well curated decorative objects etc in your neighbourhood to choose.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
