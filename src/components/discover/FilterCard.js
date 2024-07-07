import React from 'react';
import product from '../../../src/assets/images/product.svg';
import heartIcon from '../../../src/assets/images/heartIcon.svg';
import discount from '../../../src/assets/images/discount.svg';
import cartIcon from '../../../src/assets/images/cartIcon.svg';

export default function FilterCard() {

    return (
        <div className="w-full rounded-[35px] flex flex-col gap-2">
            <div className='relative'>
                <img
                    src={product}
                    alt="img"
                    className="md:h-[248px] h-[140px] w-full md:rounded-[35px] rounded-[15px] object-cover"
                />
                <div className='md:w-[45px] md:h-[45px] absolute md:right-5 md:top-5 right-[12px] top-2.5 w-[32px] h-[32px] md:p-2.5 md:p-1.5 p-2 bg-white rounded-[13px] flex items-center justify-center'>
                    <img src={heartIcon} className='h-auto w-auto' alt='favouritr' />
                </div>
                <div className='absolute md:left-5 md:bottom-4 left-2.5 bottom-2.5'>
                    <img src={discount} className='xl:h-auto xl:w-[75px] md:w-[55px] md:h-[55px] w-[41px] h-[41px]' alt='favouritr' />
                </div>
            </div>
            <div className="lg:p-[17px]">
                <div>
                    <h2 className="sm:text-xl text-[16px] font-medium lg:leading-[25px] leading:[18px] text-[#2B2B2B]">Navy Blue party dress</h2>
                    <p className="lg:mt-2 mt-1.5 text-gray-200 font-normal text-[15px] leading-[18px] overflow-hidden line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='mt-2.5 flex items-center md:gap-2.5 gap-1.5'>
                        <div className='md:w-10 md:h-10 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='md:text-[17px] text-sm font-medium md:leading-[21px] leading-[17px] uppercase'>S</p>
                        </div>
                        <div className='md:w-10 md:h-10 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='md:text-[17px] text-sm font-medium md:leading-[21px] leading-[17px] uppercase'>M</p>
                        </div>
                        <div className='md:w-10 md:h-10 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='md:text-[17px] text-sm font-medium md:leading-[21px] leading-[17px] uppercase'>L</p>
                        </div>
                        <div className='md:w-10 md:h-10 w-7 h-7 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='md:text-[17px] text-sm font-medium md:leading-[21px] leading-[17px] uppercase'>XL</p>
                        </div>
                    </div>
                    <div className='md:mt-[25px] mt-[18px] flex items-baseline gap-2.5'>
                        <p className='text-gray-300 md:text-[25px] text-base font-semibold md:leading-[31px] leading-[20px]'>$9,999</p>
                        <p className='text-gray-200 md:text-[15px] text-sm font-normal md:leading-[18px] leading-[17px] discountLine'>$12,499</p>
                    </div>
                </div>
                <div className='lg:mt-[35px] mt-[15px]'>
                    <button
                        type="button"
                        className="lg:rounded-[18px] rounded-full w-full flex justify-center items-center sm:gap-[17px] gap-2.5 font-[oswald] uppercase bg-transparent lg:p-[15px] px-[15px] py-2.5 text-lg font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[29px] tracking-[0.02em]"
                    >
                        <img src={cartIcon} className='h-auto w-auto' alt='favouritr' />
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}