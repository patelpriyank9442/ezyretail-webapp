import React from "react";
import Header from "../components/layout/Header";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import Footer from "../components/layout/Footer";
import product from '../../src/assets/images/product.svg';

const checkoutData = [
    { id: 1, name: "Premium Blue Dress", size: "L", qty: "01", amount: "$55,800.00", imageSrc: product },
    { id: 2, name: "Premium Blue Dress", size: "L", qty: "01", amount: "$55,800.00", imageSrc: product }
];

const pricingDetails = [
    { label: 'Expected Delivery:', amount: '20/04/2024' },
    { label: 'Delivery Address', amount: 'Hirabaug, Varachha Road, Surat, Gujarat, India - 395009' },
    { label: 'Order ID:', amount: '#45789552477' },
    { label: 'Tracking ID:', amount: '15894578962458' },
];

export default function Payment() {

    return (
        <>
            <div className='bg-slate h-auto'>
                <Header />
                <div className='container mx-auto xl:px-0 px-[18px]'>
                    <div className='flex mb-[23px]'>
                        <div className='flex gap-4 items-center'>
                            <img src={chevronLeft} className='h-auto w-auto' alt='favourite' />
                            <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to home</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">Thank you for your order!!</h1>
                        <p className="text-gray-300 sm:w-[500px] w-auto font-normal md:text-xl text-[15px] md:leading-[25px] leading-[18px] mt-2.5">Please check your inbox as a confirmation email is on its way.</p>
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
                                                <p className="text-gray-300 lg:text-base text-[15px] font-medium lg:leading-[20px] leading-[18px] text-end lg:w-[190px] w-auto">
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
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}