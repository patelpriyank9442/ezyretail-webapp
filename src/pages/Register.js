import React, { useState } from 'react'
import Modal from 'react-modal';
import ezyRetail from '../../src/assets/images/ezyRetail.svg';
import instagramIcon from '../../src/assets/images/instagramIcon.svg';
import facebookIcon from '../../src/assets/images/facebookIcon.svg';
import chevronRight from '../../src/assets/images/chevronRight.svg';
import eye from '../../src/assets/images/eye.svg';
import hiddeneye from '../../src/assets/images/hiddeneye.svg';

export default function Register({ registerModal, setRegisterModal, setLoginModal }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmVisibility = () => {
        setConfirmVisible(!confirmVisible);
    };
    return (
        <>
            <Modal
                isOpen={registerModal}
                onRequestClose={() => {
                    setRegisterModal(false);
                }}
                className="relative overflow-y-auto my-6 mx-auto md:w-[600px] w-full overflow-hidden bg-white sm:rounded-[30px] md:h-auto h-full shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[30px]">
                    <div className='flex flex-col gap-[15px]'>
                        <div>
                            <img src={ezyRetail} alt='ezy-retail-logo' className='h-auto w-[110px]' />
                        </div>
                        <div className='flex flex-col text-center sm:w-[450px] mx-auto py-[15px]'>
                            <div className='font-[oswald] font-bold sm:text-[35px] text-[22px] sm:leading-[45px] leading-[28px] tracking-[0.01em] uppercase'>Sign up</div>
                            <p className='text-gray-300 font-normal text-[15px] leading-[18px] tracking-[0.01em]'>Register your account and get free shipping on first order.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px]'>
                            <div className="w-full">
                                <div className="w-full font-medium capitalize text-base leading-[20px]">
                                    First name
                                </div>
                                <input
                                    name="first_name"
                                    type="text"
                                    className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                    placeholder="Enter full name"
                                />
                            </div>
                            <div className="w-full">
                                <div className="w-full font-medium capitalize text-base leading-[20px]">
                                    Last name
                                </div>
                                <input
                                    name="last_name"
                                    type="text"
                                    className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                    placeholder="Enter full name"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                Email
                            </div>
                            <input
                                name="email"
                                type="email"
                                className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                Mobile
                            </div>
                            <input
                                name="Mobile"
                                type="number"
                                className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                placeholder="Enter mobile number"
                            />
                        </div>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                Set Password
                            </div>
                            <div className='relative'>
                                <input
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    className="placeholder:text-gray-200 flex w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                    placeholder="Enter password"
                                />
                                <img src={passwordVisible ? hiddeneye : eye} onClick={togglePasswordVisibility} alt='img' className={`absolute pointer right-[13px] ${passwordVisible ? 'top-[16px]' : 'top-[18px]'}`} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                Confirm Password
                            </div>
                            <div className='relative'>
                                <input
                                    name="password"
                                    type={confirmVisible ? "text" : "password"}
                                    className="placeholder:text-gray-200 flex w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                    placeholder="Re-enter password"
                                />
                                <img src={confirmVisible ? hiddeneye : eye} onClick={toggleConfirmVisibility} alt='img' className={`absolute pointer right-[13px] ${confirmVisible ? 'top-[16px]' : 'top-[18px]'}`} />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <div class="flex justify-between items-center">
                            <div class="bg-[#D9D9D9] block md:w-[186px] w-[89px] h-[1.5px]"></div>
                            <p class="text-[15px] font-normal text-gray-300 leading-[18px] capitalize"> Or direct sign Up  with </p>
                            <div class="bg-[#D9D9D9] block md:w-[186px] w-[89px] h-[1.5px]"></div>
                        </div>
                        <div>
                            <div className='flex sm:gap-6 gap-[15px] items-center justify-center'>
                                <div className='w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center'>
                                    <img src={instagramIcon} alt='instagramIcon' className='h-auto sm:w-5 w-[18px]' />
                                </div>
                                <div className='w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center'>
                                    <img src={facebookIcon} alt='facebookIcon' className='h-auto sm:w-5 w-[18px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                        >
                            sign up
                        </button>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-transparent sm:p-[18px] p-3 text-[22px] font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[32px] tracking-[0.02em]"
                            onClick={() => { setLoginModal(true); setRegisterModal(false) }}
                        >
                            Already have a account
                            <img src={chevronRight} className='h-auto w-auto' alt='favourit' />
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}