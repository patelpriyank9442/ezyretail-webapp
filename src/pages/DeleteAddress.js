import React from 'react'
import Modal from 'react-modal';
import deleteDisableIcon from '../../src/assets/images/deleteDisableIcon.svg';

export default function DeleteAddress({ deleteModal, setDeleteModal }) {

    return (
        <>
            <Modal
                isOpen={deleteModal}
                onRequestClose={() => {
                    setDeleteModal(false);
                }}
                className="relative my-6 mx-auto sm:w-[600px] w-[357px] overflow-hidden bg-white rounded-[30px] h-auto shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[25px]">
                    <div className='flex justify-center'>
                        <img src={deleteDisableIcon} alt='img' className='lg:w-[64px] w-[56px] h-auto' />
                    </div>
                    <div className='flex flex-col items-center lg:gap-[15px] gap-2'>
                        <div className='font-[oswald] font-bold sm:text-[30px] text-[22px] sm:leading-[39px] leading-[28px] tracking-[0.01em] uppercase'>Delete address!</div>
                        <p className='text-gray-200 font-normal text-base lg:leading-[20px] leading-[18px]'>Are you sure you want to delete this address?</p>
                    </div>
                    <div className='flex gap-[15px]'>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-transparent border-[1.5px] border-gray-300 sm:p-[18px] p-3 lg:text-[22px] text-[17px] font-bold text-gray-300 lg:leading-[32px] leading-[25px] tracking-[0.02em]"
                        >
                            No, cancel
                        </button>
                        <button
                            type="button"
                            className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-alert-300 sm:p-[18px] p-3 lg:text-[22px] text-[17px] font-bold text-white lg:leading-[32px] leading-[25px] tracking-[0.02em]"
                        >
                            Yes, delete
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}