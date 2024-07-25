import React, { useState } from "react";
import plusIcon from '../../assets/images/plusIcon.svg';
import phoneIcon from '../../assets/images/phoneIcon.svg';
import editIcon from '../../assets/images/editIcon.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg';
import AddEditAddress from "../../pages/AddEditAddress";
import DeleteAddress from "../../pages/DeleteAddress";

export default function MyAddress() {
    const [selectedOption, setSelectedOption] = useState('address1');
    const [addEditModal, setAddEditModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleAddClick = () => {
        setIsEditing(false);
        setAddEditModal(true);
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setAddEditModal(true);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const addressOptions = [
        {
            id: 'address1',
            label: 'Make it my Default Address.',
            title: 'Office.1',
            name: 'Chintan Ribadiya',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            phone: '+91 95374 73458'
        },
        {
            id: 'address2',
            label: 'Make it my Default Address.',
            title: 'Office.1',
            name: 'Chintan Ribadiya',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            phone: '+91 95374 73458'
        },
    ];

    return (
        <>
            <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px]">
                <div className="space-y-[25px]">
                    <div className="flex justify-between">
                        <h3 className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] capitalize">MY Addresses</h3>
                        <button
                            type="button"
                            className="rounded-full h-fit flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 py-3 px-[30px] text-[17px] font-bold text-white border-[1.5px] border-gray-300 leading-[25px] tracking-[0.02em]"
                            onClick={handleAddClick}
                        >
                            <img src={plusIcon} className='h-auto w-auto invert' alt='favourite' />
                            Add new address
                        </button>
                    </div>
                    <div className="space-y-[15px]">
                        {addressOptions.map(option => (
                            <div key={option.id} className={`border-[1.5px] ${selectedOption === option.id ? 'border-gray-300' : 'border-gray-100'}  rounded-[15px] p-[17px]`}>
                                <div className="md:flex justify-between items-center">
                                    <div className="space-y-[18px]">
                                        <div>
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
                                        <div className="space-y-2.5">
                                            <div className="text-white bg-gray-300 text-sm font-semibold leading-[16px] lg:px-3 px-2.5 py-[5px] rounded-[56px] w-fit">{option.title}</div>
                                            <div className="lg:space-y-2 space-y-1.5">
                                                <h3 className="text-gray-300  font-medium lg:text-xl text-lg lg:leading-[25px] leading-[22px]">{option.name}</h3>
                                                <p className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px]">{option.address}</p>
                                                <div className="text-gray-200 font-normal lg:text-[17px] text-[15px] lg:leading-[21px] leading-[18px] flex items-center lg:gap-2.5 gap-2">
                                                    <img src={phoneIcon} alt="img" />
                                                    <p>{option.phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gap-y-3 md:flex-col flex gap-x-2.5 md:mt-0 mt-[15px]">
                                        <button onClick={handleEditClick} className="lg:w-[180px] w-full rounded-full h-fit flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-100 py-3 px-[30px] text-[17px] font-bold text-gray-300 leading-[25px] tracking-[0.02em]">
                                            <img src={editIcon} className='h-4 w-4 invert' alt='img' />
                                            edit
                                        </button>
                                        <button onClick={() => setDeleteModal(true)} className="lg:w-[180px] w-full rounded-full h-fit flex justify-center items-center gap-4 font-[oswald] uppercase bg-alert-100 py-3 px-[30px] text-[17px] font-bold text-alert-300 leading-[25px] tracking-[0.02em]">
                                            <img src={deleteIcon} className='h-auto w-auto' alt='img' />
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {addEditModal && (
                        <AddEditAddress
                            addEditModal={addEditModal}
                            setAddEditModal={setAddEditModal}
                            isEditing={isEditing}
                        />
                    )}
                    {deleteModal && (
                        <DeleteAddress
                            deleteModal={deleteModal}
                            setDeleteModal={setDeleteModal}
                        />
                    )}
                </div>
            </div>
        </>

    )
}