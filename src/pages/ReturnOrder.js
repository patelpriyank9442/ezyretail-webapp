import React, { useState } from "react";
import Header from "../components/layout/Header";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import Footer from "../components/layout/Footer";
import product from '../../src/assets/images/product.svg';
import uploadImage from '../../src/assets/images/uploadImage.svg';
import closeIcon from '../../src/assets/images/closeIcon.svg';

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

const options = [
    {
        id: 'exchange',
        label: 'Exchange Product',
    },
    {
        id: 'return',
        label: 'Return Product',
    },
];

export default function ReturnOrder() {
    const [selectedOption, setSelectedOption] = useState('exchange');
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

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
                            <img src={chevronLeft} className='h-auto w-auto' alt='favourite' />
                            <p className='text-gray-300 font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to order</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">return or exchange order</h1>
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
                                </div>
                            </div>
                            <div className="grid col-span-4 h-auto">
                                <div className="bg-white rounded-[20px] lg:p-5 p-[15px] space-y-[25px] h-fit">
                                    <h3 className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] capitalize">Location Details</h3>
                                    <div className="space-y-5">
                                        <div className="md:flex gap-[60px] md:space-y-0 space-y-3">
                                            {options.map(option => (
                                                <div key={option.id} className="text-base text-gray-300 font-normal text-start leading-[22px]">
                                                    <label className="flex sm:items-center lg:gap-[14px] gap-2.5">
                                                        <input
                                                            type="radio"
                                                            name="deliveryOption"
                                                            value={option.id}
                                                            checked={selectedOption === option.id}
                                                            onChange={handleOptionChange}
                                                            className="h-[19px] w-[19px]"
                                                        />
                                                        <p className="text-gray-300 font-medium text-[17px] leading-[21px]">{option.label}</p>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-[15px]">
                                            <div className="flex gap-[15px] items-start">
                                                <label htmlFor="photo-upload" className="relative h-[90px] w-[90px] bg-gray-100 rounded-[15px] cursor-pointer flex items-center justify-center text-gray-500">
                                                    <input
                                                        id="photo-upload"
                                                        type="file"
                                                        onChange={handleImageUpload}
                                                        className="hidden"
                                                        multiple
                                                    />
                                                    <img src={uploadImage} alt="uploadImage" />
                                                </label>
                                                <div className="flex space-x-4">
                                                    {images.map((src, index) => (
                                                        <div key={index} className="relative">
                                                            <img src={src} alt={`upload-preview-${index}`} className="h-[90px] w-[90px] object-cover rounded-[15px]" />
                                                            <button
                                                                className="absolute top-[-6px] right-[-6px] bg-red-500 h-5 w-5 flex items-center justify-center text-white bg-alert-300 rounded-full p-1"
                                                                onClick={() => handleRemoveImage(index)}
                                                            >
                                                                <img src={closeIcon} alt="closeIcon" className="invert h-2.5 w-2.5" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                    Return Reason
                                                </label>
                                                <select
                                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                                    id="reason"
                                                >
                                                    <option value="" className="text-gray-200">Select</option>
                                                    <option value="New York">Reason</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                    Description
                                                </label>
                                                <textarea
                                                    className="flex w-full mt-2 rounded-[15px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                    type="text"
                                                    placeholder="Enter something here"
                                                    id="description"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex md:justify-end justify-center gap-[15px]">
                                        <button
                                            type="button"
                                            className="rounded-full h-fit md:w-[150px] w-full flex justify-center items-center gap-4 font-[oswald] uppercase md:py-[15px] py-3 md:text-xl text-[17px] font-bold text-gray-200 border-[1.5px] border-gray-200 md:leading-[29px] leading-[25px] tracking-[0.02em]"
                                        >
                                            Discard
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-full h-fit md:w-[150px] w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 md:py-[15px] py-3 md:text-xl text-[17px] font-bold text-white border-[1.5px] border-gray-200 md:leading-[29px] leading-[25px] tracking-[0.02em]"
                                        >
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}