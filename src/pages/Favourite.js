import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Testimonial from '../components/home/Testimonial';
import Benefit from '../components/home/Benefit';
import FilterCard from '../components/discover/FilterCard';
import searchIcon from '../../src/assets/images/searchIcon.svg';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';

export default function Favourite() {

    return (
        <div className='bg-slate h-auto'>
            <Header />
            <div className='container mx-auto xl:px-0 px-[18px]'>
                <div className='md:hidden flex flex-col gap-[15px] mb-5'>
                    <div className='flex gap-4'>
                        <img src={chevronLeft} className='h-auto w-auto' alt='favouritr' />
                        <p className='text-gray-300 font-medium text-base leading-[20px] capitalize'>Go back</p>
                    </div>
                </div>
                <h1 className='text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase'>Favorite Items</h1>
                <p className='text-gray-300 sm:w-[500px] w-auto font-normal md:text-xl text-[15px] md:leading-[25px] leading-[18px] mt-2.5'>Let’s not be confused. Buy something from your favorite items list.</p>
            </div>
            <div className='container mx-auto md:pt-[30px] pt-5 md:pb-[105px] pb-[70px] xl:px-0 px-[18px]'>
                <div className="relative flex gap-2.5 md:pb-[30px] pb-5">
                    <div className="absolute lg:top-5 top-3 left-[22px] flex pointer-events-none">
                        <img
                            src={searchIcon}
                            className="w-5 h-5"
                            alt="search"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products here."
                        className="px-2 h-max lg:text-lg text-base pl-14 font-normal lg:leading-[22px] leading-5 w-full bg-slate border-[1.5px] lg:py-[18px] py-3 rounded-[50px] border-gray-300 focus:outline-none placeholder:text-gray-200 text-gray-300"
                    />
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-[30px] md:gap-y-[30px] gap-x-2.5 gap-y-5'>
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                </div>
            </div>
            <Benefit />
            <Testimonial />
            <Footer />
        </div>
    );
}
