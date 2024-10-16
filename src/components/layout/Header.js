import React, { useState } from 'react';
import ezyRetailWhite from '../../../src/assets/images/ezyRetailWhite.svg';
import searchIcon from '../../../src/assets/images/searchIcon.svg';
import cartIcon from '../../../src/assets/images/cartIcon.svg';
import favouriteIcon from '../../../src/assets/images/favouriteIcon.svg';
import walletIcon from '../../../src/assets/images/walletIcon.svg';
import user from '../../../src/assets/images/user.svg';
import menuIcon from '../../../src/assets/images/menuIcon.svg';
import closeIcon from '../../../src/assets/images/closeIcon.svg';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ForgotPassword from '../../pages/ForgotPassword';
import EmailVerification from '../../pages/EmailVerification';
import ResetPassword from '../../pages/ResetPassword';
import chevronRight from '../../../src/assets/images/chevronRight.svg';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [forgotModal, setForgotModal] = useState(false);
    const [verificationtModal, setVerificationModal] = useState(false);
    const [resetPasswordModal, setResetPasswordModal] = useState(false);
    const [walletBalance, setWalletBalance] = useState(false);
    const [searchProduct, setSearchProduct] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const balanceMenu = () => {
        setWalletBalance(!walletBalance)
    }

    const searchMenu = () => {
        setSearchProduct(!searchProduct)
    }

    const menuItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Discover',
            href: '/discover',
        },
        {
            name: 'About Us',
            href: '#',
        },
        {
            name: 'Help',
            href: '#',
        },
    ]

    const mobileMenuItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Discover',
            href: '/discover',
        },
        {
            name: 'My Favorites',
            href: '#',
        },
        {
            name: 'My Orders',
            href: '#',
        },
        {
            name: 'My Addresses',
            href: '#',
        },
        {
            name: 'Return Policy',
            href: '#',
        },
        {
            name: 'Refund Policy',
            href: '#',
        },
        {
            name: 'About Us',
            href: '#',
        },
        {
            name: 'Help',
            href: '#',
        },
        {
            name: 'Log Out',
            href: '#',
        },
    ]

    return (
        <>
            <div className='container mx-auto sm:py-[30px] py-[25px] xl:px-0 px-[18px] relative'>
                <div className={`w-full bg-black rounded-[500px] relative ${walletBalance || searchProduct ? 'z-[90]' : ''}`}>
                    <div className="flex items-center justify-between lg:pl-10 sm:pl-6 pl-3 pr-3 py-3">
                        <div className="inline-flex items-center sm:space-x-0 xxs:space-x-3 space-x-2">
                            <div className="sm:hidden sm:w-[42px] sm:h-[42px] w-[30px] h-[30px] sm:p-2.5 p-2 bg-white rounded-full flex items-center justify-center" onClick={toggleMenu}>
                                <img src={menuIcon} alt='menuIcon' className="cursor-pointer text-white" />
                            </div>
                            <img src={ezyRetailWhite} alt='logo' className='h-auto lg:w-[165px] xxs:w-[92px] w-[84px]' />
                        </div>
                        <div className="hidden md:flex">
                            <ul className="inline-flex xl:space-x-[30px] space-x-5">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={` tracking-[1%] ${location?.pathname === item.href ? 'text-white font-bold leading-[26px] text-[21px]' : 'text-gray-200 font-medium leading-[21px] text-[17px]'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center xl:gap-[15px] xxs:gap-2 gap-1'>
                            <div onClick={searchMenu} className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full flex items-center justify-center'>
                                <img src={searchIcon} className='h-auto w-auto' alt='search' />
                            </div>
                            <div className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full flex items-center justify-center'>
                                <img src={cartIcon} className='h-auto w-auto' alt='cart' />
                            </div>
                            <div className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full lg:flex hidden items-center justify-center'>
                                <img src={favouriteIcon} className='h-auto w-auto' alt='favouritr' />
                            </div>
                            <div onClick={balanceMenu} className='lg:w-auto lg:h-[42px] w-[30px] h-[30px] py-2.5 lg:pl-3 md:pl-1.5 pl-2 lg:pr-2 md:pr-1.5 pr-2 bg-white rounded-full flex items-center justify-center gap-2.5'>
                                <img src={walletIcon} className='h-auto w-auto' alt='wallet' />
                                <p className='text-gray-300 text-base leading-5 font-medium lg:flex hidden'>$90.49</p>
                            </div>
                            <button onClick={() => setLoginModal(true)} className='lg:w-auto w-[30px] sm:h-[42px] h-[30px] lg:py-1.5 lg:px-2 lg:bg-white rounded-full flex items-center justify-center gap-2'>
                                <img src={user} alt='user' />
                                <p className='text-gray-300 text-base leading-5 font-medium lg:flex hidden'>Chintan</p>
                            </button>
                        </div>
                    </div>
                </div>
                {loginModal === true && (
                    <Login
                        loginModal={loginModal}
                        setLoginModal={setLoginModal}
                        registerModal={registerModal}
                        setRegisterModal={setRegisterModal}
                        setForgotModal={setForgotModal}
                    />
                )}
                {registerModal === true && (
                    <Register
                        registerModal={registerModal}
                        setRegisterModal={setRegisterModal}
                        setLoginModal={setLoginModal}
                    />
                )}
                {forgotModal === true && (
                    <ForgotPassword
                        forgotModal={forgotModal}
                        setForgotModal={setForgotModal}
                        setVerificationModal={setVerificationModal}
                        setLoginModal={setLoginModal}
                    />
                )}
                {verificationtModal === true && (
                    <EmailVerification
                        verificationtModal={verificationtModal}
                        setVerificationModal={setVerificationModal}
                        setResetPasswordModal={setResetPasswordModal}
                        setForgotModal={setForgotModal}
                    />
                )}
                {resetPasswordModal === true && (
                    <ResetPassword
                        resetPasswordModal={resetPasswordModal}
                        setResetPasswordModal={setResetPasswordModal}
                        setVerificationModal={setVerificationModal}
                    />
                )}
                {isMenuOpen && (
                    <>
                        <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-[40%]">
                            <div className="relative w-auto">
                                <div className="border-0 rounded-r-[20px] shadow-lg relative  w-full bg-white outline-none focus:outline-none">
                                    <div className="w-[293px] overflow-hidden shadow-lg rounded-[20px]">
                                        <div className="px-[18px] pb-6 pt-16">
                                            <div className="flex items-center justify-between">
                                                <div className="inline-flex items-center space-x-2">
                                                    <span className="font-bold font-[oswald] text-3xl tracking-[1%] leading-[39px]">MENU</span>
                                                </div>
                                                <div className="-mr-2">
                                                    <button
                                                        type="button"
                                                        onClick={toggleMenu}
                                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                    >
                                                        <img src={closeIcon} alt='close-Icon' className='h-[18px] w-[18px]' />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid gap-y-[5px]">
                                                    {mobileMenuItems.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={`flex items-center rounded-md px-[18px] py-3 text-sm font-semibold ${item.name === 'Log Out' ? 'text-alert-300 hover:text-white' : 'text-gray-300 hover:text-white'
                                                                } hover:bg-gray-300 hover:rounded-[500px]`}
                                                        >
                                                            <span className="text-[17px] leading-[21px] tracking-[0.01em] font-medium capitalize">
                                                                {item.name}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {walletBalance && (
                    <>
                        <div className="fixed inset-0 z-40 bg-white opacity-[80%]"></div>
                        <div className="absolute right-0 z-50 flex justify-center items-center">
                            <div className="relative sm:w-[449px] w-[332px] bg-gray-300 p-5 rounded-[20px] sm:mt-5 mt-[15px] xl:mx-0 mx-[18px]">
                                <div>
                                    <p className="sm:text-base text-sm font-medium text-gray-100 leading-[20px]">Wallet Balance</p>
                                    <h2 className="sm:text-[38px] text-3xl font-bold text-white leading-[47px] mt-2">$90.49</h2>
                                    <p className='text-slate font-normal sm:text-base text-sm leading-[22px] mt-3'>You can use this amount to get discounted in your next purchase from this site. (You can spent maximum $100.00 from your wallet balance.)</p>
                                    <button
                                        type="button"
                                        className="mt-5 rounded-full w-auto flex justify-center items-center gap-4 font-[oswald] uppercase bg-white sm:px-[30px] sm:py-2.5 px-[22px] py-3 sm:text-[22px] text-[17px] font-bold text-gray-300 leading-[25px] tracking-[0.02em]"
                                    >
                                        Start shopping
                                        <img src={chevronRight} className='h-auto w-auto' alt='favourite' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {searchProduct && (
                    <>
                        <div className="fixed inset-0 z-40 bg-white opacity-[80%]"></div>
                        <div className="absolute w-full right-0 z-50 flex justify-center items-center">
                            <div className="relative w-full bg-gray-300 sm:py-5 py-[15px] rounded-[20px] sm:mt-5 mt-[15px] xl:mx-0 mx-[18px]">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-[22px] flex items-center pointer-events-none">
                                        <img
                                            src={searchIcon}
                                            className="w-5 h-5 invert"
                                            alt="search"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-2 sm:text-[23px] text-base pl-14 font-normal leading-[28px] w-full focus:outline-none bg-gray-300 placeholder:text-white text-white"
                                    />
                                </div>
                                <p className='pt-[15px] text-gray-200 font-normal text-[15px] leading-[18px] flex justify-center'>No, search results available here to show.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}