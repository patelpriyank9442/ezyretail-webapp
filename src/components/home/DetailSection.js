import React, { useEffect } from 'react';
import product from '../../../src/assets/images/product.svg';
import heartIcon from '../../../src/assets/images/heartIcon.svg';
import star from '../../../src/assets/images/star.svg';
import grayStar from '../../../src/assets/images/grayStar.svg';
import cartIcon from '../../../src/assets/images/cartIcon.svg';
import { getProductDetail } from '../../store/ApiSlice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function DetailSection() {
    const navigate = useNavigate()
    const { productDetail } = useSelector((state) => state.product)
    const Product = productDetail[0];
    const addToCartHandler = () => {
        console.log(Product)
    }
    const handleClick = (id) => {
        navigate(`/product-detail/${id}`)
    }
    return (
        <>
            <div className='container mx-auto xl:px-0 px-[18px] lg:py-[100px] py-[70px]'>
                <h1 className='text-gray-300 font-[oswald] font-bold xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[35px] xl:leading-[91px] lg:leading-[62px] sm:leading-[50px] leading-[45px] tracking-[0.01em] uppercase'>Featured product</h1>
                <div className='sm:pt-16 pt-10 sm:flex gap-[50px]' onClick={() => {
                    handleClick(Product?._id)
                }}>
                    <div className='flex flex-col w-full'>
                        <img
                            src={Product?.images[0]}
                            alt="img"
                            className="sm:h-[620px] sm:w-[719px] rounded-[35px] object-cover"
                        />
                        <div className='flex sm:gap-5 gap-2.5 mt-5'>
                            <img
                                src={product}
                                alt="img"
                                className="lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                        </div>
                    </div>
                    <div className='flex gap-[45px] w-full'>
                        <div className='w-full sm:pt-0 pt-[15px]'>
                            <div className='flex gap-3 items-center'>
                                <div className="flex gap-3">
                                    <div className="flex gap-2">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={grayStar} alt="" />
                                    </div>
                                </div>
                                <div className='text-gray-300 underline font-medium leading-[22px] text-base'>325 Reviews</div>
                            </div>
                            <h1 className='mt-2.5 text-gray-300 font-[oswald] sm:font-bold font-semibold sm:text-[40px] text-[22px] lg:leading-[59px] sm:leading-[46px] leading-[33px]'>{Product?.name}</h1>
                            <p className='mt-2.5 text-gray-200 font-normal text-[17px] leading-[23px] overflow-hidden sm:line-clamp-2 line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className='sm:pt-[30px] sm:pb-[25px] pt-[15px] pb-[15px]'>
                                <p className='text-gray-300 font-normal text-[19px] leading-[23px]'>Fabric color:</p>
                                <div className='flex gap-5 mt-[15px]'>
                                    <div className='bg-black sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                    <div className='bg-[#439CE9] sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                    <div className='bg-[#2EF19F] sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                    <div className='bg-black sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-300 font-normal text-[19px] leading-[23px]'>Size:</p>
                                <div className='flex gap-2.5 mt-[15px]'>
                                    <div className='sm:w-11 w-9 sm:h-11 h-9 border border-gray-300 rounded-full flex items-center justify-center'>
                                        <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>S</p>
                                    </div>
                                    <div className='sm:w-11 w-9 sm:h-11 h-9 border border-gray-300 rounded-full flex items-center justify-center'>
                                        <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>M</p>
                                    </div>
                                    <div className='sm:w-11 w-9 sm:h-11 h-9 border border-gray-300 rounded-full flex items-center justify-center'>
                                        <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>L</p>
                                    </div>
                                    <div className='sm:w-11 w-9 sm:h-11 h-9 border border-gray-300 rounded-full flex items-center justify-center'>
                                        <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>XL</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-[25px]'>
                                <p className='text-gray-300 font-normal text-[19px] sm:flex hidden leading-[23px]'>Price</p>
                                <div className='sm:mt-[15px] flex items-center gap-2.5'>
                                    <p className='text-gray-300 text-[35px] font-semibold leading-[51px]'>${Product?.price}</p>
                                    <p className='text-gray-200 text-base font-normal leading-[20px] discountLine'>${Product?.price}</p>
                                </div>
                            </div>
                            <div className='pt-[25px]'>
                                <button
                                    type="button"
                                    className="rounded-full sm:w-auto w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-transparent pl-[30px] sm:py-[18px] py-3 pr-[18px] text-[22px] font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                                    onClick={addToCartHandler}
                                >
                                    <img src={cartIcon} className='h-auto w-auto' alt='favouritr' />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className='sm:flex hidden justify-end'>
                            <div className='lg:w-[55px] lg:h-[55px] w-[30px] h-[30px] lg:p-3 md:p-1.5 p-2 bg-white rounded-[18px] flex items-center justify-center'>
                                <img src={heartIcon} className='h-auto w-auto' alt='favouritr' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}