import React, { useState } from 'react'
import Modal from 'react-modal';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import OtpInput from 'react-otp-input';

export default function EmailVerification({ verificationtModal, setVerificationModal, setResetPasswordModal, setForgotModal }) {
    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    return (
        <>
            <Modal
                isOpen={verificationtModal}
                onRequestClose={() => {
                    setVerificationModal(false);
                }}
                className="relative my-6 mx-auto sm:w-[600px] w-[357px] overflow-hidden bg-white rounded-[30px] h-auto shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[30px]">
                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex gap-4'>
                            <img src={chevronLeft} onClick={() => { setForgotModal(true); setVerificationModal(false) }} className='h-auto w-auto' alt='favouritr' />
                            <p className='text-gray-300 font-medium text-lg leading-[22px]'>Go back</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:w-[450px] mx-auto'>
                        <div className='font-[oswald] font-bold sm:text-[35px] text-[22px] sm:leading-[45px] leading-[28px] tracking-[0.01em] uppercase'>email verification</div>
                        <p className='text-gray-200 font-normal text-[15px] sm:leading-[18px] leading-[21px] tracking-[0.01em] sm:contents'>we have sent verification code on your registered email.
                            <span className='text-gray-300 font-medium underline'>Check your inbox.</span></p>
                    </div>
                    <div>
                        <h2 className='text-base font-medium leading-[20px]'>Verification Code</h2>
                        <div className='flex gap-5 otpbox pt-2'>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={"border-[1.5px] rounded-[10px] border-solid border-gray-100 sm:!w-[83px] sm:h-[55px] !w-[47px] !h-[47px] text-lg text-gray-300 font-medium focus:outline-none"}
                            />
                        </div>
                        <p className='mt-2 text-gray-200 font-normal text-[15px] leading-[18px] flex w-full justify-center gap-1 items-end '>Code will expire in <span className='text-semibold text-gray-300 text-[17px] leading-[21px]'>51s</span></p>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                            onClick={() => { setResetPasswordModal(true); setVerificationModal(false) }}
                        >
                            verify
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}