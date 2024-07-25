import React from "react";

export default function ProfileDetail() {

    return (
        <>
            <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px]">
                <div className="space-y-[25px]">
                    <h3 className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] capitalize">Profile Details</h3>
                    <div className="space-y-[15px]">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    First Name
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="text"
                                    placeholder="Enter your First Name"
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
                                    placeholder="Enter your Last Name"
                                    id="lastName"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    mobile number
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="number"
                                    placeholder="Enter your mobile number"
                                    id="mobileNumber"
                                />
                            </div>
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    email
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="text"
                                    placeholder="Enter your email"
                                    id="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-[15px] w-full">
                        <button className="text-gray-300 lg:w-auto w-full font-[oswald] font-semibold lg:text-xl text-[17px] lg:leading-[29px] leading-[25px] tracking-[0.02em] border-[1.5px] border-gray-300 rounded-full lg:py-[15px] py-3 lg:px-[30px] uppercase">discard changes</button>
                        <button className="text-white lg:w-auto w-full bg-success-300 font-[oswald] font-semibold lg:text-xl text-[17px] lg:leading-[29px] leading-[25px] tracking-[0.02em] rounded-full lg:py-[15px] py-3 lg:px-[30px] uppercase">Save changes</button>
                    </div>
                </div>
            </div>
        </>

    )
}