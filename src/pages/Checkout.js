import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import chevronRight from '../../src/assets/images/chevronRight.svg';
import product from '../../src/assets/images/product.svg';
import plusIcon from '../../src/assets/images/plusIcon.svg';
import phoneIcon from '../../src/assets/images/phoneIcon.svg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createShippingAddress, getShippingAddress } from "../store/ApiSlice/shippingAddressSlice";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");

const options = [
    {
        id: 'regular',
        label: 'Regular Delivery',
        description: 'Delivery within 10 days of dispatch.',
        price: '$10.00'
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
        price: '$30.00'
    }
];

export default function Checkout() {
    const { cartData } = useSelector((state) => state.cart);
    const { shippingDetail } = useSelector((state) => state.shippingAddress);
    const [selectedOption, setSelectedOption] = useState('regular');
    const [addressModel, setAddressModel] = useState(false)
    const [addressDetail, setAddressDetail] = useState({})
    const [selectShippingAddress, setSelectShippingAddress] = useState({})
    const userData = JSON.parse(localStorage.getItem("authUser"))
    console.log("shippingDetailshippingDetail", selectShippingAddress);

    const dispatch = useDispatch()
    // const [cartData, setCartData] = useState([]);
    // let totalPrice = 0;
    // let totalTax = 0;

    useEffect(() => {
        dispatch(getShippingAddress())
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setAddressDetail({
            ...addressDetail,
            [name]: value
        })
    }

    const handleOptionChange = (e, data) => {
        console.log("datadata", data, e);

        setSelectedOption(e);
    };

    const calculateTotals = (cartData) => {
        let totalPrice = 0;
        let totalTax = 0;

        if (Array.isArray(cartData)) {
            cartData.forEach(item => {
                const itemTotal = item.price * item.quantity;
                const itemTax = item.tax * item.quantity;

                totalPrice += itemTotal;
                totalTax += itemTax;
            });
        } else {
            console.error("cartData is not an array:", cartData);
        }

        return { totalPrice, totalTax };
    };

    const { totalPrice, totalTax } = calculateTotals(cartData);
    const pricingDetails = [
        { label: 'Total Price', amount: `$ ${totalPrice}` },
        { label: 'Tax', amount: `$ ${totalTax ? totalTax : 0}` },
        { label: 'Gift Coupon', amount: '$ 0' },
        { label: 'Paying From Wallet', amount: '$ 0' },
        { label: 'Shipping Charges', amount: `$ ${selectedOption?.price ? selectedOption?.price : 0}` }
    ];

    let totalAmount = pricingDetails.reduce((acc, item) => {
        let amount = parseFloat(item.amount.replace(/[^\d.-]/g, ''));
        return acc + amount;
    }, 0);

    totalAmount = totalAmount.toFixed(2);

    const handleSubmit = async () => {
        const payload = {
            firstName: addressDetail?.firstName,
            lastName: addressDetail?.lastName,
            email: addressDetail?.email,
            phoneNumber: addressDetail?.mobileNumber,
            address: addressDetail?.address,
            city: addressDetail?.city,
            state: addressDetail?.state,
            country: addressDetail?.country,
            pinCode: addressDetail?.pincode,
            title: addressDetail?.title
        }
        const result = await dispatch(
            createShippingAddress({ payload, addressDetail })
        );
        console.log("resultresultresult", result);

        if (result?.payload?.success === true) {
            toast.success(
                addressDetail?._id ? "Shipping Address Updated Successfully" : "Shipping Address created Successfully"
            );
            dispatch(getShippingAddress());
            setAddressDetail({});
            setAddressModel(false)
        } else {
            toast.error(result?.payload?.message);
            setAddressModel(true)
        }
    }

    return (
        <>
            <div className='bg-slate h-auto'>
                <Header />
                <div className='container mx-auto xl:px-0 px-[18px]'>
                    <div className='flex mb-[23px]'>
                        <div className='flex gap-4 items-center'>
                            <Link to='/my-cart'> <img src={chevronLeft} className='h-auto w-auto' alt='favourite' /></Link>
                            <p className='text-gray-300 cursor-pointer font-medium lg:text-lg text-base lg:leading-[22px] leading-[20px] capitalize'>Back to cart</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-gray-300 font-[oswald] font-bold lg:text-[45px] text-[30px] lg:leading-[58px] leading-[39px] tracking-[0.01em] uppercase">checkout</h1>
                        </div>
                        <div className="lg:flex hidden">
                            <Link to='/checkout-payment'>
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
                                        {cartData?.map((checkout) => (
                                            <div key={checkout.id} className="flex gap-[13px]">
                                                <div>
                                                    <img
                                                        src={checkout.images?.[0]}
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
                                                                {checkout.quantity}
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-[5px]">
                                                            <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                                Amount:
                                                            </p>
                                                            <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                                {checkout.price}
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
                                            <p className="font-[oswald] text-gray-300 lg:text-lg text-xl font-bold lg:leading-[26px] leading-[29px]">${totalAmount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-4 h-fit">
                                <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px] mb-4 overflow-hidden">
                                    <div className="space-y-[25px]">
                                        <div className="flex items-center justify-between">
                                            <div className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] tracking-[0.01em]">Location Details</div>
                                            <div className="flex gap-3 text-gray-300 font-medium lg:text-[18px] text-base lg:leading-[22px] leading-5 tracking-[0.02em] items-center cursor-pointer"
                                                onClick={() => {
                                                    setAddressModel(!addressModel)
                                                }}
                                            >
                                                <img src={plusIcon} alt="img" className="w-3.5 h-3.5" />
                                                <p>Add new address</p>
                                            </div>
                                        </div>
                                        {!addressModel && (
                                            <div className="flex lg:gap-[15px] gap-2.5 overflow-x-scroll hide-scroll">
                                                {shippingDetail.map((address, index) => (
                                                    <>
                                                        {address?.userId === userData?.userInfo?._id ? (
                                                            <div key={index} className="cursor-pointer border-[1.5px] w-full xl:min-w-[250px] lg:min-w-[370px] min-w-[250px] border-gray-100 rounded-[15px] lg:p-[17px] p-[13px] space-y-2.5"
                                                                onClick={() => {
                                                                    setAddressModel(true)
                                                                    setAddressDetail({
                                                                        firstName: address.firstName,
                                                                        lastName: address.lastName,
                                                                        email: address.email,
                                                                        mobileNumber: address.phoneNumber,
                                                                        address: address.address,
                                                                        city: address.city,
                                                                        state: address.state,
                                                                        country: address.country,
                                                                        pincode: address.pinCode,
                                                                        title: address.title,
                                                                        _id: address?._id
                                                                    })
                                                                }}
                                                            >
                                                                <div className="flex items-center gap-2 bg-gray-300 text-white text-sm font-semibold leading-[16px] lg:px-3 px-2.5 py-[5px] rounded-[56px] w-fit">
                                                                    <span>{address?.title}</span>
                                                                    <input
                                                                        type="checkbox"
                                                                        className="w-4 h-4 cursor-pointer"
                                                                        onClick={(event) => {
                                                                            event.stopPropagation()
                                                                            setSelectShippingAddress((prev) => (prev?._id === address._id ? null : address));
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="lg:space-y-2 space-y-1.5">
                                                                    <h3 className="text-gray-300  font-medium lg:text-xl text-lg lg:leading-[25px] leading-[22px]">{address?.firstName} {address?.lastName}</h3>
                                                                    <p className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px]">{address?.address}</p>
                                                                    <div className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px] flex items-center lg:gap-2.5 gap-2">
                                                                        <img src={phoneIcon} alt="img" />
                                                                        <p>{address?.phoneNumber}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                Please Create Your Shipping Address.
                                                            </div>
                                                        )}
                                                    </>
                                                ))}
                                            </div>
                                        )}
                                        {addressModel && (
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
                                                            name="firstName"
                                                            value={addressDetail?.firstName}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="lastName"
                                                            value={addressDetail?.lastName}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="mobileNumber"
                                                            value={addressDetail?.mobileNumber}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="email"
                                                            value={addressDetail?.email}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="address"
                                                            value={addressDetail?.address}
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                                                    <div>
                                                        <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                            Address Location
                                                        </label>
                                                        <input
                                                            className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                            type="text"
                                                            placeholder="Enter address location"
                                                            id="title"
                                                            name="title"
                                                            value={addressDetail?.title}
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                            pin code/zip code
                                                        </label>
                                                        <input
                                                            className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                                            type="number"
                                                            placeholder="Enter pin code/zip code"
                                                            id="pincode"
                                                            name="pincode"
                                                            value={addressDetail?.pincode}
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                                            city
                                                        </label>
                                                        <select
                                                            className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                                            id="city"
                                                            name="city"
                                                            value={addressDetail?.city}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="state"
                                                            value={addressDetail?.state}
                                                            onChange={(e) => handleChange(e)}
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
                                                            name="country"
                                                            value={addressDetail?.country}
                                                            onChange={(e) => handleChange(e)}
                                                        >
                                                            <option value="" className="text-gray-200">Select country</option>
                                                            <option value="India">India</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                        </select>
                                                    </div>

                                                </div>
                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="rounded-full h-fit w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-white sm:p-[18px] p-3 text-[22px] font-bold text-black border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                                                            onClick={() => setAddressModel(false)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="rounded-full h-fit w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 sm:p-[18px] p-3 text-[22px] font-bold text-white border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                                                            onClick={() => handleSubmit()}
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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
                                                                    checked={selectedOption?.id === option.id}
                                                                    onChange={() => {
                                                                        handleOptionChange(option)
                                                                    }}
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