import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import chevronRight from '../../src/assets/images/chevronRight.svg';
import product from '../../src/assets/images/product.svg';
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
        price: '$20.00'
    },
    {
        id: 'express',
        label: 'Express Delivery',
        description: 'Same day delivery, location-dependent.',
        price: '$40.00'
    }
];

export default function GuestCheckout() {
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
                        <div className="grid lg:grid-cols-6 gap-[30px]">
                            <div className="grid grid-cols-1 lg:col-span-2 col-span-4 relative">
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
                                    <div className="border-b-[1.5px] border-gray-300 my-[19px]"></div>
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
                                        <div className="border-b-[1.5px] border-gray-300 my-[19px]"></div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-300 lg:text-lg font-semibold lg:leading-[22px] text-base leading-[20px]">Subtotal</p>
                                            <p className="font-[oswald] text-gray-300 lg:text-lg text-xl font-bold lg:leading-[26px] leading-[29px]">$67,200.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-4 h-fit">
                                <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px] mb-4 overflow-hidden">
                                    <div className="space-y-[25px]">
                                        <div className="flex items-center justify-between">
                                            <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Location Details</div>
                                            <p className="text-gray-200 font-normal text-base leading-[20px] tracking-[0.02em]">Existing customer? <span className="text-gray-300 font-bold underline">Login</span></p>
                                        </div>
                                        <div className="space-y-[15px]">
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        First Name
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter full name"
                                                        id="firstName"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter last name"
                                                        id="lastName"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        mobile number
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="number"
                                                        placeholder="Enter mobile number"
                                                        id="mobileNumber"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        Email
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="email"
                                                        placeholder="Enter email address"
                                                        id="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-[15px]">
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        full address
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="text"
                                                        placeholder="Enter full address"
                                                        id="address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        pin code/zip code
                                                    </label>
                                                    <input
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                        type="number"
                                                        placeholder="Enter pin code/zip code"
                                                        id="pincode"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        city
                                                    </label>
                                                    <select
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                                        id="city"
                                                    >
                                                        <option value="" className="text-gray-200">Select City</option>
                                                        <option value="New York">New York</option>
                                                        <option value="Los Angeles">Los Angeles</option>
                                                        <option value="Chicago">Chicago</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        state
                                                    </label>
                                                    <select
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                                        id="state"
                                                    >
                                                        <option value="" className="text-gray-200">Select state</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Bihar">Bihar</option>
                                                        <option value="Haryana">Haryana</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                        country
                                                    </label>
                                                    <select
                                                        className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                                        id="country"
                                                    >
                                                        <option value="" className="text-gray-200">Select country</option>
                                                        <option value="India">India</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b-[1.5px] border-gray-300 my-[19px]"></div>
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