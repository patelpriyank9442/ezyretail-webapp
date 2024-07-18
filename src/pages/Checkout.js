import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import chevronRight from '../../src/assets/images/chevronRight.svg';
import product from '../../src/assets/images/product.svg';
import plusIcon from '../../src/assets/images/plusIcon.svg';
import { Link } from "react-router-dom";

const checkoutData = [
    { id: 1, name: "Premium Blue Dress", size: "L", qty: "01", amount: "$55,800.00", imageSrc: product },
    { id: 2, name: "Premium Blue Dress", size: "L", qty: "01", amount: "$55,800.00", imageSrc: product }
];

const pricingDetails = [
    { label: 'Total Price', amount: '$1,11,600.00' },
    { label: 'Tax', amount: '+$400.00' },
    { label: 'Gift Coupon', amount: '-$44.800.00' },
    { label: 'Paying From Wallet', amount: '-$100.00' },
    { label: 'Shipping Charges', amount: '$0.00' }
];

const addresses = [
    {
        title: 'Home',
        name: 'Chintan Ribadiya',
        address: 'Hirabaug, Varachha Road, Surat, Gujarat, India - 395009',
        phone: '+91 95374 73458'
    },
    {
        title: 'Office.1',
        name: 'Chintan Ribadiya',
        address: '4140 Parker Rd. Allentown, New Mexico 31134',
        phone: '+91 95374 73458'
    },
    {
        title: 'Office.2',
        name: 'Chintan Ribadiya',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        phone: '+91 95374 73458'
    }
];

const options = [
    {
        id: 'regular',
        label: 'Regular Delivery',
        description: 'Delivery within 10 days of dispatch.',
        price: '$0.00'
    },
    {
        id: 'dhlPremium',
        label: 'DHL Premium',
        description: 'Delivery within 2-3 days of dispatch.',
        price: '$0.00'
    },
    {
        id: 'express',
        label: 'Express Delivery',
        description: 'Same day delivery, location-dependent.',
        price: '$0.00'
    }
];

export default function Checkout() {
    const [selectedOption, setSelectedOption] = useState('regular');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className='bg-slate h-auto'>
                <Header />
                <div className='container mx-auto xl:px-0 px-[18px]'>
                    <div className='flex mb-[23px]'>
                        <div className='flex gap-4 items-center'>
                            <Link to='/my-cart'> <img src={chevronLeft} className='h-auto w-auto' alt='favourite' /></Link>
                            <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to cart</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">checkout</h1>
                        </div>
                        <div className="lg:flex hidden">
                        <Link to='/payment'>
                            <button
                                type="button"
                                className="rounded-full h-fit w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 sm:p-[18px] p-3 text-[22px] font-bold text-white border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                            >
                                proceed to pay
                                <img src={chevronRight} className='h-auto w-auto invert' alt='favourite' />
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:mt-10 mt-5 mb-[52px]">
                        <div className="grid lg:grid-cols-4 gap-[30px]">
                            <div className="grid grid-cols-1 lg:col-span-1 col-span-3 relative">
                                <div className="bg-white rounded-[20px] lg:p-5 p-[15px] space-y-5 h-fit">
                                    <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Order Details</div>
                                    <div className="space-y-5">
                                        {checkoutData.map((checkout) => (
                                            <div key={checkout.id} className="flex gap-[13px]">
                                                <div>
                                                    <img
                                                        src={checkout.imageSrc}
                                                        alt="img"
                                                        className="xl:h-[75px] xl:w-[75px] h-[50px] w-[50px] xl:rounded-[12px] rounded-[8px] object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 lg:text-base text-[15px] font-medium lg:leading-[20px] leading-[18px] mb-[9px]">
                                                        {checkout.name}
                                                    </p>
                                                    <div className="space-y-[5px]">
                                                        <div className="flex gap-[5px]">
                                                            <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                                Size:
                                                            </p>
                                                            <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                                {checkout.size}
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-[5px]">
                                                            <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                                Qty:
                                                            </p>
                                                            <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                                {checkout.qty}
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-[5px]">
                                                            <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                                Amount:
                                                            </p>
                                                            <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                                {checkout.amount}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border border-gray-300 my-[19px]"></div>
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
                                            <p className="font-[oswald] text-gray-300 lg:text-lg text-xl font-bold lg:leading-[26px] leading-[29px]">$67,200.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-3 h-fit">
                                <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px] mb-4 overflow-hidden">
                                    <div className="space-y-[25px]">
                                        <div className="flex items-center justify-between">
                                            <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Location Details</div>
                                            <div className="flex gap-3 text-gray-300 font-medium lg:text-[18px] text-base lg:leading-[22px] leading-5 tracking-[0.02em] items-center">
                                                <img src={plusIcon} alt="img" className="w-3.5 h-3.5" />
                                                <p>Add new address</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:gap-[15px] gap-2.5 overflow-x-scroll hide-scroll">
                                            {addresses.map((address, index) => (
                                                <div key={index} className="border-[1.5px] w-full xl:min-w-[250px] lg:min-w-[370px] min-w-[250px] border-gray-100 rounded-[15px] lg:p-[17px] p-[13px] space-y-2.5">
                                                    <div className="text-white bg-gray-300 text-sm font-semibold leading-[16px] lg:px-3 px-2.5 py-[5px] rounded-[56px] w-fit">{address.title}</div>
                                                    <div className="lg:space-y-2 space-y-1.5">
                                                        <h3 className="text-gray-300  font-medium lg:text-xl text-lg lg:leading-[25px] leading-[22px]">{address.name}</h3>
                                                        <p className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px]">{address.address}</p>
                                                        <div className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px] flex items-center lg:gap-2.5 gap-2">{address.phone}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border border-gray-300 my-[19px]"></div>
                                        <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Shipping Type</div>
                                        <div>
                                            {options.map(option => (
                                                <div key={option.id} className="text-base first:pt-0 pt-[15px] pb-[15px] text-gray-300 font-normal w-full text-start border-b-[1.5px] border-gray-100 leading-[22px] last:border-b-0">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <label className="flex sm:items-center lg:gap-[14px] gap-2.5">
                                                                <input
                                                                    type="radio"
                                                                    name="deliveryOption"
                                                                    value={option.id}
                                                                    checked={selectedOption === option.id}
                                                                    onChange={handleOptionChange}
                                                                    className="h-[19px] w-[19px]"
                                                                />
                                                                <div className="lg:space-y-[7px] space-y-[4px]">
                                                                    <p className="text-gray-300 font-medium text-[17px] leading-[21px]">{option.label}</p>
                                                                    <p className="text-gray-300 font-normal text-[15px] leading-[18px]">{option.description}</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <p className="text-gray-300 font-semibold text-[17px] leading-[21px]">{option.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}