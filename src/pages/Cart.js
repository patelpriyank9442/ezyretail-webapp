import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import chevronRight from '../../src/assets/images/chevronRight.svg';
import product from '../../src/assets/images/product.svg';
import removeIcon from '../../src/assets/images/removeIcon.svg';
import plusIcon from '../../src/assets/images/plusIcon.svg';
import minusIcon from '../../src/assets/images/minusIcon.svg';
import { Link } from "react-router-dom";

const products = [
    { id: 1, name: 'Premium Blue Dress', price: 55800.00, image: product },
    { id: 2, name: 'Premium Blue Dress', price: 55800.00, image: product },
];

export default function Cart() {
    const [quantities, setQuantities] = useState(products.map(() => 1));
    const maxQuantity = 10;

    const updateButtonStates = (quantity) => ({
        minusDisabled: quantity <= 1,
        plusDisabled: quantity >= maxQuantity,
    });

    const handleButtonClick = (index, type) => {
        setQuantities((prevQuantities) =>
            prevQuantities.map((quantity, i) => {
                if (i === index) {
                    if (type === 'minus') {
                        return Math.max(quantity - 1, 1);
                    } else if (type === 'plus') {
                        return Math.min(quantity + 1, maxQuantity);
                    }
                }
                return quantity;
            })
        );
    };

    const handleQuantityChange = (index, event) => {
        let value = parseInt(event.target.value, 10);
        value = isNaN(value) ? 1 : value;
        setQuantities((prevQuantities) =>
            prevQuantities.map((quantity, i) => (i === index ? value : quantity))
        );
    };

    const pricingDetails = [
        { label: 'Total Price', amount: '$1,11,600.00' },
        { label: 'Tax', amount: '+$400.00' },
        { label: 'Gift Coupon', amount: '-$0.00' },
        { label: 'Paying From Wallet', amount: '-$0.00' },
        { label: 'Shipping Charges', amount: '$0.00' }
    ];

    return (
        <>
            <div className='bg-slate h-auto'>
                <Header />
                <div className='container mx-auto xl:px-0 px-[18px]'>
                    <div className='flex mb-[23px]'>
                        <div className='flex gap-4 items-center'>
                            <img src={chevronLeft} className='h-auto w-auto' alt='favourite' />
                            <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to shopping</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">my cart</h1>
                            <p className="text-gray-300 sm:w-[500px] w-auto font-normal md:text-xl text-[15px] md:leading-[25px] leading-[18px] mt-2.5">Process pending order and make cart product yours.</p>
                        </div>
                        <div className="lg:flex hidden">
                            <Link to='/checkout'>
                            <button
                                type="button"
                                className="rounded-full h-fit w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 sm:p-[18px] p-3 text-[22px] font-bold text-white border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                            >
                                Continue to Checkout
                                <img src={chevronRight} className='h-auto w-auto invert' alt='favourite' />
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:mt-10 mt-5 mb-[52px]">
                        <div className="grid lg:grid-cols-6 gap-[30px]">
                            <div className="grid grid-cols-1 lg:col-span-2 col-span-4 relative">
                                <div className="bg-white rounded-[20px] lg:p-5 p-[15px] space-y-5">
                                    <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Payout</div>
                                    <div className="space-y-[15px]">
                                        {pricingDetails.map((item, index) => (
                                            <div className="flex justify-between" key={index}>
                                                <p className="text-gray-200 lg:text-[17px] lg:font-normal lg:leading-[21px] text-[15px] font-medium leading-[18px]">
                                                    {item.label}
                                                </p>
                                                <p className="text-gray-300 lg:text-base text-[15px] font-medium lg:leading-[20px] leading-[18px]">
                                                    {item.amount}
                                                </p>
                                            </div>
                                        ))}
                                        <div className="border border-gray-300 my-[19px]"></div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-300 lg:text-lg font-semibold lg:leading-[22px] text-base leading-[20px]">Subtotal</p>
                                            <p className="font-[oswald] text-gray-300 lg:text-lg text-xl font-bold lg:leading-[26px] leading-[29px]">$1,12,000.00</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 lg:rounded-[15px] lg:p-[15px] rounded-[12px] p-3 lg:space-y-[15px] space-y-3">
                                        <p className="text-gray-300 font-semibold text-[17px] leading-[21px]">Use Gift Coupon</p>
                                        <form className="w-full">
                                            <div className="relative">
                                                <input type="text" className="w-full lg:pl-[15px] pl-3 lg:h-[57px] h-[46px] lg:p-2 p-1.5 lg:text-base text-[15px] text-gray-300 rounded-[500px] bg-white lg:font-normal font-medium focus:outline-none lg:leading-[20px] leading-[18px] placeholder:text-gray-300" placeholder="EZY40OFF" />
                                                <button className="absolute lg:right-2 right-1.5 lg:top-2 top-1.5 uppercase text-white bg-gray-300 rounded-full lg:px-[30px] px-[15px] lg:py-2 py-[5px] font-bold text-[17px] lg:leading-[25px] leading-[23px] tracking-[0.02em]">apply</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="bg-gray-100 lg:rounded-[15px] lg:p-[15px] rounded-[12px] p-3 lg:space-y-[15px] space-y-3">
                                        <div>
                                            <p className="text-gray-200 font-medium text-[15px] text-lg">Wallet Balance</p>
                                            <p className="text-gray-300 font-bold text-xl lg:leading-[25px] leading-[23px] mt-2">$190.49</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <input type="checkbox" className="rounded-[5px] h-[17px] w-[17px] border-[1.5px] border-gray-300" />
                                            <p class="font-medium text-base lg:leading-[20px] leading-[18px]">I want to pay <span className="font-bold">$100.00</span> from wallet balance.</p>
                                        </div>
                                        <ul className="list-disc list-outside lg:pl-[19px] pl-[21px]">
                                            <li className="text-gray-200 font-normal text-[15px] leading-[18px]">You can spent maximum $100.00 from your wallet.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-4 h-fit">
                                {products.map((product, index) => {
                                    const { minusDisabled, plusDisabled } = updateButtonStates(quantities[index]);

                                    return (
                                        <div key={product.id} className="bg-white rounded-[20px] lg:p-[25px] p-[15px] mb-4">
                                            <div className="space-y-5">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-[15px] items-center">
                                                        <img
                                                            src={product.image}
                                                            alt="img"
                                                            className="xl:h-[120px] xl:w-[120px] lg:h-[100px] lg:w-[100px] h-[50px] w-[50px] lg:rounded-[15px] rounded-[8px] object-cover"
                                                        />
                                                        <div>
                                                            <p className='text-gray-300 font-medium lg:text-xl text-[17px] lg:leading-[25px] leading-[21px]'>
                                                                {product.name}
                                                            </p>
                                                            <div className='flex sm:gap-2.5 gap-1.5 mt-[15px]'>
                                                                {['S', 'M', 'L', 'XL'].map((size) => (
                                                                    <div key={size} className='sm:w-10 w-7 sm:h-10 h-7 border border-gray-300 rounded-full flex items-center justify-center'>
                                                                        <p className='sm:text-[19px] text-base font-medium sm:leading-[23px] leading-5 uppercase'>{size}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-300 font-semibold text-[22px] leading-[27px]">${product.price.toLocaleString()}</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex border-[1.5px] border-text-gray-300 rounded-[500px] overflow-hidden w-fit h-8">
                                                        <button
                                                            className="bg-gray-300 text-white border-0 text-xl text-center justify-center px-[9px]"
                                                            onClick={() => handleButtonClick(index, 'minus')}
                                                            aria-label="Decrease"
                                                            disabled={minusDisabled}
                                                        >
                                                            <img src={minusIcon} className='h-auto w-[13px] invert' alt='img' />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="lg:w-[55px] md:w-[80px] sm:w-[84px] w-14 text-center font-semibold border-0 p-2 text-base focus:outline-none"
                                                            value={quantities[index]}
                                                            min="1"
                                                            max={maxQuantity}
                                                            onChange={(event) => handleQuantityChange(index, event)}
                                                        />
                                                        <button
                                                            className="bg-gray-300 text-white border-0 text-xl text-center justify-center px-[9px]"
                                                            onClick={() => handleButtonClick(index, 'plus')}
                                                            aria-label="Increase"
                                                            disabled={plusDisabled}
                                                        >
                                                            <img src={plusIcon} className='h-auto w-[13px] invert' alt='img' />
                                                        </button>
                                                    </div>
                                                    <div className="flex gap-[5px] items-center">
                                                        <img src={removeIcon} alt="img" className="w-4 h-4" />
                                                        <p className="text-alert-300 font-medium text-[19px] leading-[23px]">Remove</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}