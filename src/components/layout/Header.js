import React from 'react';
import ezyRetailWhite from '../../../src/assets/images/ezyRetailWhite.svg';
import searchIcon from '../../../src/assets/images/searchIcon.svg';
import cartIcon from '../../../src/assets/images/cartIcon.svg';
import favouriteIcon from '../../../src/assets/images/favouriteIcon.svg';
import walletIcon from '../../../src/assets/images/walletIcon.svg';
import user from '../../../src/assets/images/user.svg';
import menuIcon from '../../../src/assets/images/menuIcon.svg';
import closeIcon from '../../../src/assets/images/closeIcon.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'Discover',
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
    ]

    const mobileMenuItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'Discover',
            href: '#',
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
            <div className='container mx-auto sm:py-[30px] py-[25px] xl:px-0 px-[18px]'>
                <div className="w-full bg-black rounded-[500px]">
                    <div className="flex items-center justify-between lg:pl-10 sm:pl-6 pl-3 pr-3 py-3">
                        <div className="inline-flex items-center sm:space-x-0 space-x-3">
                            <div className="sm:hidden sm:w-[42px] sm:h-[42px] w-[30px] h-[30px] sm:p-2.5 p-2 bg-white rounded-full flex items-center justify-center" onClick={toggleMenu}>
                                <img src={menuIcon} alt='menuIcon' className="cursor-pointer text-white" />
                            </div>
                            <img src={ezyRetailWhite} alt='logo' className='h-auto lg:w-[165px] w-[92px]' />
                        </div>
                        <div className="hidden md:flex">
                            <ul className="inline-flex xl:space-x-[30px] space-x-5">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-[17px] focus:text-[21px] leading-[21px] focus:leading-[26px] tracking-[1%] font-medium focus:font-bold text-gray-200 focus:text-white"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center xl:gap-[15px] gap-2'>
                            <div className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full flex items-center justify-center'>
                                <img src={searchIcon} className='h-auto w-auto' alt='search' />
                            </div>
                            <div className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full flex items-center justify-center'>
                                <img src={cartIcon} className='h-auto w-auto' alt='cart' />
                            </div>
                            <div className='lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] lg:p-2.5 md:p-1.5 p-2 bg-white rounded-full lg:flex hidden items-center justify-center'>
                                <img src={favouriteIcon} className='h-auto w-auto' alt='favouritr' />
                            </div>
                            <div className='lg:w-auto lg:h-[42px] w-[30px] h-[30px] py-2.5 lg:pl-3 md:pl-1.5 pl-2 lg:pr-2 md:pr-1.5 pr-2 bg-white rounded-full flex items-center justify-center gap-2.5'>
                                <img src={walletIcon} className='h-auto w-auto' alt='wallet' />
                                <p className='text-gray-300 text-base leading-5 font-medium lg:flex hidden'>$90.49</p>
                            </div>
                            <div className='lg:w-auto w-[30px] sm:h-[42px] h-[30px] lg:py-1.5 lg:px-2 lg:bg-white rounded-full flex items-center justify-center gap-2'>
                                <img src={user} alt='user' />
                                <p className='text-gray-300 text-base leading-5 font-medium lg:flex hidden'>Chintan</p>
                            </div>
                        </div>

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
                                                                    <span className="text-[17px] leading-[21px] tracking-[1%] font-medium">
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
                    </div>
                </div>
            </div>
        </>
    )
}