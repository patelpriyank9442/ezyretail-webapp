import React from 'react'
import Modal from 'react-modal';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';

export default function ForgotPassword({ forgotModal, setForgotModal, setVerificationModal, setLoginModal }) {
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
                            <img src={chevronLeft} onClick={() => {setLoginModal(true); setForgotModal(false)}} className='h-auto w-auto' alt='favouritr' />
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
                                className="placeholder:text-gray-200 w-full mt-2 text-gray-300 font-normal text-base leading-[20px] p-[13px] border-[1.5px] border-gray-100 rounded-[50px] focus:outline-none"
                                placeholder="Enter email address"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                            onClick={() => { setVerificationModal(true); setForgotModal(false) }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}