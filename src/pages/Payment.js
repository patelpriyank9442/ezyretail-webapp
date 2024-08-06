import React, { useState } from "react";
import Header from "../components/layout/Header";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import Footer from "../components/layout/Footer";
import product from '../../src/assets/images/product.svg';
import CancelOrderModal from "./CancelOrderModal";

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
    const [cancelOrderModal, setCancelOrderModal] = useState(false);

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
                        <p className="text-gray-300 font-normal md:text-xl text-[15px] md:leading-[25px] leading-[18px] mt-2.5">Please check your inbox as a confirmation email is on its way.</p>
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
                                                <p className="text-gray-300 lg:text-base text-[15px] font-medium lg:leading-[20px] leading-[18px] text-end lg:w-[190px] w-auto">
                                                    {item.amount}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex items-center justify-center gap-2.5'>
                                        <p className="text-gray-200 font-medium text-[15px] leading-[18px]">Return or Refund Policy</p>
                                        <p className='w-[5px] h-[5px] rounded-full bg-gray-200'></p>
                                        <p className="text-gray-200 font-medium text-[15px] leading-[18px]">Terms & Conditions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-4 h-auto">
                                <div className="flex items-center justify-center">
                                    react-slider
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        onClick={() => setCancelOrderModal(true)} 
                                        className="rounded-full h-fit w-fit flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 px-[30px] py-[15px] text-xl font-bold text-white border-[1.5px] border-gray-300 leading-[29px] tracking-[0.02em]"
                                    >
                                        cancel Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cancelOrderModal && (
                    <CancelOrderModal
                        cancelOrderModal={cancelOrderModal}
                        setCancelOrderModal={setCancelOrderModal}
                    />
                )}
                <Footer />
            </div>
        </>
    )
}