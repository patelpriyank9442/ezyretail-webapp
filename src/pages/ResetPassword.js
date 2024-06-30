import React, { useState } from 'react'
import Modal from 'react-modal';
import chevronLeft from '../../src/assets/images/chevronLeft.svg';
import eye from '../../src/assets/images/eye.svg';
import hiddeneye from '../../src/assets/images/hiddeneye.svg';

export default function ResetPassword({ resetPasswordModal, setResetPasswordModal, setVerificationModal }) {
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
                isOpen={resetPasswordModal}
                onRequestClose={() => {
                    setResetPasswordModal(false);
                }}
                className="relative my-6 mx-auto sm:w-[600px] w-[357px] overflow-hidden bg-white rounded-[30px] h-auto shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[30px]">
                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex gap-4'>
                            <img src={chevronLeft} onClick={() => { setVerificationModal(true); setResetPasswordModal(false) }} className='h-auto w-auto' alt='favouritr' />
                            <p className='text-gray-300 font-medium text-lg leading-[22px]'>Go back</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:w-[450px] mx-auto'>
                        <div className='font-[oswald] font-bold sm:text-[35px] text-[22px] sm:leading-[45px] leading-[28px] tracking-[0.01em] uppercase'>reset password</div>
                        <p className='text-gray-200 font-normal text-[15px] leading-[18px] tracking-[0.01em]'>Set new password and secure your account.</p>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <div className="w-full">
                            <div className="w-full font-medium capitalize text-base leading-[20px]">
                                New Password
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
                                Confirm New Password
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
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-200 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                            onClick={() => { setResetPasswordModal(false) }}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}