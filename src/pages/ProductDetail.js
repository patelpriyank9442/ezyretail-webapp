import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import product from '../../src/assets/images/product.svg';
import star from '../../src/assets/images/star.svg';
import grayStar from '../../src/assets/images/grayStar.svg';
import cartIcon from '../../src/assets/images/cartIcon.svg';
import minusIcon from '../../src/assets/images/minusIcon.svg';
import plusIcon from '../../src/assets/images/plusIcon.svg';
import ReviewTab from '../components/productDetail/ReviewTab';

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 10;

    const updateButtonStates = useCallback(() => {
        return {
            minusDisabled: quantity <= 1,
            plusDisabled: quantity >= maxQuantity,
        };
    }, [quantity, maxQuantity]);

    const { minusDisabled, plusDisabled } = updateButtonStates();

    useEffect(() => {
        updateButtonStates();
    }, [updateButtonStates]);

    const handleButtonClick = (type) => {
        if (type === 'minus') {
            setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
        } else if (type === 'plus') {
            setQuantity((prevQuantity) => Math.min(prevQuantity + 1, maxQuantity));
        }
    };

    const handleQuantityChange = (event) => {
        let value = parseInt(event.target.value, 10);
        value = isNaN(value) ? 1 : value;
        setQuantity(value);
    };

    return (
        <div className='bg-slate h-auto'>
            <Header />
            <div className='container mx-auto xl:px-0 px-[18px]'>
                <div className='flex mb-5'>
                    <div className='flex gap-4'>
                        <img src={chevronLeft} className='h-auto w-auto' alt='favouritr' />
                        <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Go back</p>
                    </div>
                </div>
                <div className='sm:flex lg:pb-[50px] pb-[20px] lg:gap-[50px] gap-[30px]'>
                    <div className='flex flex-col w-full'>
                        <img
                            src={product}
                            alt="img"
                            className="sm:h-[620px] sm:w-[719px] rounded-[35px] object-cover"
                        />
                        <div className='flex sm:gap-5 gap-2.5 mt-5'>
                            <img
                                src={product}
                                alt="img"
                                className="xl:h-[120px] xl:w-[120px] lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="xl:h-[120px] xl:w-[120px] lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="xl:h-[120px] xl:w-[120px] lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
                            />
                            <img
                                src={product}
                                alt="img"
                                className="xl:h-[120px] xl:w-[120px] lg:h-[100px] lg:w-[100px] h-[55px] w-[55px] lg:rounded-[18px] rounded-[10px] object-cover"
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
                            <h1 className='mt-2.5 text-gray-300 font-[oswald] sm:font-bold font-semibold sm:text-[40px] text-[22px] lg:leading-[59px] sm:leading-[46px] leading-[33px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h1>
                            <p className='text-gray-300 font-normal text-[19px] leading-[23px] mt-2.5 mb-[15px]'>Key Features:</p>
                            <ul className='list-outside list-disc pl-[18px]'>
                                <li className='text-gray-200 font-normal text-[17px] leading-[23px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className='text-gray-200 font-normal text-[17px] leading-[23px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                <li className='text-gray-200 font-normal text-[17px] leading-[23px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                            </ul>
                            <p className='text-gray-300 font-medium text-[17px] leading-[21px] mt-[5px] underline'>Read more</p>
                            <div className='xl:pt-[30px] xl:pb-[25px] pt-[15px] pb-[15px]'>
                                <p className='text-gray-300 font-normal text-[19px] leading-[23px]'>Fabric color:</p>
                                <div className='flex md:gap-5 gap-3 mt-[15px]'>
                                    <div className='flex flex-col items-center gap-2.5'>
                                        <div className='bg-black sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                        <div className='bg-black sm:h-[9px] h-2 sm:w-[9px] w-2 rounded-full'></div>
                                    </div>
                                    <div className='bg-[#439CE9] sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                    <div className='bg-[#2EF19F] sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                    <div className='bg-black sm:h-10 h-8 sm:w-10 w-8 rounded-full'></div>
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-300 font-normal text-[19px] leading-[23px]'>Size:</p>
                                <div className='flex gap-2.5 mt-[15px]'>
                                    {['S', 'M', 'L', 'XL'].map((size) => (
                                        <div className='sm:w-11 w-9 sm:h-11 h-9 border border-gray-300 rounded-full flex items-center justify-center'>
                                            <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>{size}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='pt-[25px]'>
                                <p className='text-gray-300 font-normal text-[19px] sm:flex hidden leading-[23px]'>Price</p>
                                <div className='sm:mt-[15px] flex items-center gap-2.5'>
                                    <p className='text-gray-300 xl:text-[35px] text-[25px] font-semibold xl:leading-[51px] leading-[31px]'>$55,800</p>
                                    <p className='text-gray-200 text-base font-normal leading-[20px] discountLine'>$74,400</p>
                                </div>
                            </div>
                            <div className='pt-[25px] flex lg:gap-[25px] gap-2.5'>
                                <div className="flex border-[1.5px] border-text-gray-300 rounded-[500px] overflow-hidden w-fit lg:h-[69px] h-[49px]">
                                    <button
                                        className="bg-gray-300 text-white border-0 text-xl text-center justify-center px-[15px]"
                                        onClick={() => handleButtonClick('minus')}
                                        aria-label="Decrease"
                                        disabled={minusDisabled}
                                    >
                                        <img src={minusIcon} className='h-auto w-auto invert' alt='img' />
                                    </button>
                                    <input
                                        type="number"
                                        className="lg:w-28 md:w-[80px] sm:w-[84px] w-14 text-center border-0 p-2 text-base focus:outline-none bg-slate"
                                        value={quantity}
                                        min="1"
                                        max={maxQuantity}
                                        onChange={handleQuantityChange}
                                    />
                                    <button
                                        className="bg-gray-300 text-white border-0 text-xl text-center justify-center px-[15px]"
                                        onClick={() => handleButtonClick('plus')}
                                        aria-label="Increase"
                                        disabled={plusDisabled}
                                    >
                                        <img src={plusIcon} className='h-auto w-auto invert' alt='img' />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="rounded-full w-auto lg:px-[30px] lg:py-[18px] py-3 px-5 flex items-center lg:gap-4 md:gap-2 gap-4 font-[oswald] uppercase bg-gray-300 lg:text-[22px] text-[17px] font-bold text-white lg:leading-[32px] leading-[25px] tracking-[0.02em]"
                                    >
                                        <img src={cartIcon} className='h-auto w-auto invert' alt='img' />
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewTab />
            <Footer />
        </div>
    );
}
