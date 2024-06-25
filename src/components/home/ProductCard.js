import React from 'react';
import product from '../../../src/assets/images/product.svg';
import heartIcon from '../../../src/assets/images/heartIcon.svg';
import discount from '../../../src/assets/images/discount.svg';
import cartIcon from '../../../src/assets/images/cartIcon.svg';

export default function ProductCard() {

    return (
        <div className="w-full rounded-[35px] flex flex-col gap-2.5">
            <div className='relative'>
                <img
                    src={product}
                    alt="img"
                    className="h-full w-full rounded-[35px] object-cover"
                />
                <div className='lg:w-[55px] absolute right-[30px] top-[30px] lg:h-[55px] w-[30px] h-[30px] lg:p-3 md:p-1.5 p-2 bg-white rounded-[18px] flex items-center justify-center'>
                    <img src={heartIcon} className='h-auto w-auto' alt='favouritr' />
                </div>
                <div className='absolute left-5 bottom-4'>
                    <img src={discount} className='xl:h-auto xl:w-auto lg:w-[55px] lg:h-[55px] w-[48px] h-[48px]' alt='favouritr' />
                </div>
            </div>
            <div className="p-5">
                <div>
                    <h2 className="sm:text-[24px] text-[16px] font-medium leading-[30px]">Navy Blue party dress</h2>
                    <p className="sm:mt-2.5 mt-2 text-gray-200 font-medium sm:text-[17px] text-[14px] leading-[21px] overflow-hidden line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='mt-2.5 flex items-center gap-2.5'>
                        <div className='w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='text-[19px] font-medium leading-[23px] uppercase'>S</p>
                        </div>
                        <div className='w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='text-[19px] font-medium leading-[23px] uppercase'>M</p>
                        </div>
                        <div className='w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='text-[19px] font-medium leading-[23px] uppercase'>L</p>
                        </div>
                        <div className='w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center'>
                            <p className='text-[19px] font-medium leading-[23px] uppercase'>XL</p>
                        </div>
                    </div>
                    <div className='mt-[25px] flex items-baseline gap-2.5'>
                        <p className='text-gray-300 text-[28px] font-semibold leading-[35px]'>$9,999</p>
                        <p className='text-gray-200 text-[19px] font-normal leading-[23px] discountLine'>$12,499</p>
                    </div>
                </div>
                <div className='mt-[35px]'>
                    <button
                        type="button"
                        className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-transparent sm:p-[18px] p-3 text-[22px] font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                    >
                        <img src={cartIcon} className='h-auto w-auto' alt='favouritr' />
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}