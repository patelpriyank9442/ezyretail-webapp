import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Testimonial from '../components/home/Testimonial';
import Benefit from '../components/home/Benefit';
import FilterCard from '../components/discover/FilterCard';
import searchIcon from '../../src/assets/images/searchIcon.svg';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import heartIcon from '../../src/assets/images/heartIcon.svg';
import discount from '../../src/assets/images/discount.svg';
import cartIcon from '../../src/assets/images/cartIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProduct } from '../store/ApiSlice/bannerSlice';
import { useNavigate } from 'react-router';

export default function Favourite() {
    const dispatch = useDispatch()
    const { favoriteProduct } = useSelector((state) => state.banner)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getFavoriteProduct())
    }, [])

    const handleClick = (id) => {
        navigate(`/product-detail/${id}`)
    }

    const addToFavoritHandler = (productId, categoryId) => {
        console.log("productId", productId)
        console.log("categoryId", categoryId)
    }

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
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 xxs:grid-cols-2 grid-cols-1 md:gap-x-[30px] md:gap-y-[30px] gap-x-2.5 gap-y-5'>
                    {favoriteProduct?.length > 0 && favoriteProduct?.map((item) => {
                        return (
                            <div className="w-full rounded-[35px] flex flex-col gap-2">
                                <div className='relative' onClick={() => {
                                    handleClick(item?._id)
                                }}>
                                    <img
                                        // src={item.images[0]}
                                        alt="img"
                                        className="md:h-[248px] xxs:h-[140px] h-full w-full md:rounded-[35px] rounded-[15px] object-cover cursor-pointer"
                                    />
                                    <div className='md:w-[45px] md:h-[45px] absolute md:right-5 md:top-5 right-[12px] top-2.5 w-[32px] h-[32px] md:p-2.5 md:p-1.5 p-2 bg-white rounded-[13px] flex items-center justify-center cursor-pointer' onClick={() => addToFavoritHandler(item._id, item.category._id)}>
                                        <img src={heartIcon} className='h-auto w-auto' alt='favouritr' />
                                    </div>
                                    <div className='absolute md:left-5 md:bottom-4 left-2.5 bottom-2.5'>
                                        <img src={discount} className='xl:h-auto xl:w-[75px] md:w-[55px] md:h-[55px] w-[41px] h-[41px]' alt='favouritr' />
                                    </div>
                                </div>
                                <div className="lg:p-[17px]">
                                    <div>
                                        <h2 className="sm:text-xl text-[16px] font-medium lg:leading-[25px] leading:[18px] text-[#2B2B2B]">{item.name}</h2>
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
                                            <p className='text-gray-300 md:text-[25px] text-base font-semibold md:leading-[31px] leading-[20px]'>${item?.productId?.price}</p>
                                            <p className='text-gray-200 md:text-[15px] text-sm font-normal md:leading-[18px] leading-[17px] discountLine'>${item?.productId?.actualPrice}</p>
                                        </div>
                                    </div>
                                    <div className='lg:mt-[35px] mt-[15px]'>
                                        <button
                                            type="button"
                                            className="lg:rounded-[18px] rounded-full w-full flex justify-center items-center sm:gap-[17px] gap-2.5 font-[oswald] uppercase bg-transparent lg:p-[15px] px-[15px] py-2.5 text-lg font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[29px] tracking-[0.02em]"
                                        // onClick={() => addToCartHandler(item._id, item.category._id)}
                                        >
                                            <img src={cartIcon} className='h-auto w-auto' alt='favouritr' />
                                            Add to cart
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <Benefit />
            <Testimonial />
            <Footer />
        </div>
    );
}
