import React from 'react'
import Modal from 'react-modal';
import closeIcon from '../../src/assets/images/closeIcon.svg';

export default function AddEditAddress({ addEditModal, setAddEditModal, isEditing }) {

    return (
        <>
            <Modal
                isOpen={addEditModal}
                onRequestClose={() => {
                    setAddEditModal(false);
                }}
                className="relative my-6 mx-auto sm:w-[600px] w-[357px] overflow-hidden bg-white rounded-[30px] h-auto shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
            >
                <div className="p-[25px] flex flex-col gap-[25px]">
                    <div className='flex justify-between'>
                        <div className='font-[oswald] font-bold sm:text-[35px] text-[22px] sm:leading-[45px] leading-[28px] tracking-[0.01em] uppercase'>{isEditing ? 'Edit address' : 'Add new address'}</div>
                        <img src={closeIcon} onClick={() => { setAddEditModal(false) }} className='h-auto w-auto' alt='favouritr' />
                    </div>
                    <div className='space-y-[15px]'>
                        <div className="grid grid-cols-1">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    location Name
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Location"
                                    id="location"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    full address
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="text"
                                    placeholder="Enter your address"
                                    id="address"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    pin code/zip code
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="number"
                                    placeholder="Enter your Pincode"
                                    id="pincode"
                                />
                            </div>
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    city
                                </label>
                                <select
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                    id="city"
                                >
                                    <option value="" className="text-gray-200">Select City</option>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Chicago">Chicago</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    state
                                </label>
                                <select
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 focus:outline-none"
                                    id="state"
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
                                >
                                    <option value="" className="text-gray-200">Select country</option>
                                    <option value="India">India</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div>
                                <label className="text-base text-gray-300 font-medium leading-[20px] capitalize">
                                    contact number
                                </label>
                                <input
                                    className="flex w-full mt-2 rounded-[50px] border-[1.5px] leading-[20px] font-normal border-gray-100 bg-transparent p-[13px] text-base text-gray-300 placeholder:text-gray-200 focus:outline-none"
                                    type="number"
                                    placeholder="95374 73458"
                                    id="phone"
                                />
                            </div>
                        </div>
                    </div>
                    {!isEditing ?
                        <div>
                            <button
                                type="button"
                                className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 sm:p-[18px] p-3 text-[22px] font-bold text-white leading-[32px] tracking-[0.02em]"
                            >
                                submit
                            </button>
                        </div>
                        :
                        <div className='flex gap-[15px]'>
                            <button
                                type="button"
                                className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-transparent border-[1.5px] border-gray-300 sm:p-[18px] p-3 lg:text-[22px] text-[17px] font-bold text-gray-300 lg:leading-[32px] leading-[25px] tracking-[0.02em]"
                            >
                                discard changes
                            </button>
                            <button
                                type="button"
                                className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-success-300 sm:p-[18px] p-3 lg:text-[22px] text-[17px] font-bold text-white lg:leading-[32px] leading-[25px] tracking-[0.02em]"
                            >
                                save changes
                            </button>
                        </div>
                    }
                </div>
            </Modal>
        </>
    )
}