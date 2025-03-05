import React, { useState } from 'react'
import Modal from 'react-modal';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../store/ApiSlice/authSlice';
import toast from 'react-hot-toast';

export default function ForgotPassword({ forgotModal, setForgotModal, setVerificationModal, setLoginModal }) {
    const [inputData, setInputData] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const validation = () => {
        let formIsValid = true;

        // Email format regex for validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!inputData?.email?.trim() && !inputData?.password?.trim()) {
            formIsValid = false;
            toast("Please enter email & password.");
        } else if (!inputData?.email?.trim()) {
            formIsValid = false;
            toast("Email is required.");
        } else if (!emailRegex.test(inputData?.email)) {
            formIsValid = false;
            toast("Please enter a valid email address.");
        } else {
            return formIsValid;
        }
    };
    const handleForgot = async () => {
        if (validation()) {
            const userData = {
                email: inputData.email,
            };
            dispatch(resetPassword(userData)).then((res) => {
                if (res.payload.success) {
                    toast.success("OTP send in your mail.")
                    setVerificationModal(true);
                    setForgotModal(false)
                } else {
                    toast.error(res?.payload.message)
                }
            });
        }
    };
    return (
        <>
            <Modal
                isOpen={forgotModal}
                onRequestClose={() => {
                    setForgotModal(false);
                }}
                className="relative my-6 mx-auto sm:w-[600px] w-[357px] overflow-hidden bg-white rounded-[30px] h-auto shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[30px]">
                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex gap-4'>
                            <img src={chevronLeft}
                                onClick={() => {
                                    setLoginModal(true);
                                    setForgotModal(false)
                                }}
                                className='h-auto w-auto' alt='favouritr'
                            />
                            <p className='text-gray-300 font-medium text-lg leading-[22px]'> Back to Sign In</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:w-[450px] mx-auto'>
                        <div className='font-[oswald] font-bold sm:text-[35px] text-[22px] sm:leading-[45px] leading-[28px] tracking-[0.01em] uppercase'>forgot password?</div>
                        <p className='text-gray-200 font-normal text-[15px] leading-[18px] tracking-[0.01em]'>Enter your registered email address and we’ll send the verification code on that.</p>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                Email
                            </div>
                            <input
                                name="email"
                                type="email"
                                value={inputData?.email}
                                className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                placeholder="Enter email address"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                            onClick={() => {
                                handleForgot()

                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}