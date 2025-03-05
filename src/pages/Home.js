import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import saleImage from '../../src/assets/images/saleImage.svg';
import women from '../../src/assets/images/women.svg';
import watches from '../../src/assets/images/watches.svg';
import footwear from '../../src/assets/images/footwear.svg';
import mens from '../../src/assets/images/mens.svg';
import bags from '../../src/assets/images/bags.svg';
import jewelry from '../../src/assets/images/jewelry.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from '../components/home/Collection';
import ProductCard from '../components/home/ProductCard';
import DetailSection from '../components/home/DetailSection';
import Benefit from '../components/home/Benefit';
import Testimonial from '../components/home/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../store/ApiSlice/bannerSlice';
import { useNavigate } from 'react-router';
import { getCategory } from '../store/ApiSlice/categorySlice';

export default function Home() {

    const settings = {
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const productSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 771,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };
    const { banner } = useSelector((state) => state.banner)
    const { categoryList } = useSelector((state) => state.category)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getBanner())
        dispatch(getCategory())
    }, [])
    return (
        <div className='bg-slate h-auto'>
            <Header />
            <div className='container mx-auto xl:px-0 px-[18px]'>
                <Slider {...settings}>
                    {banner.map((item, index) => (
                        <div key={index} className="mx-auto">
                            {console.log(item, "item")}
                            <img src={item.image} className='h-full w-full' alt='img' />
                        </div>
                    ))}
                </Slider>
            </div>


            <div className='container mx-auto xl:px-0 px-[18px] sm:pt-28 pt-[70px]'>
                <div className='sm:flex justify-between'>
                    <div className='sm:w-2/4 w-full'>
                        <h1 className='text-gray-300 font-[oswald] font-bold xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[35px] xl:leading-[91px] lg:leading-[62px] sm:leading-[50px] leading-[45px] tracking-[0.01em] uppercase'>shop by various categories</h1>
                    </div>
                    <div className='sm:w-2/4 w-full'>
                        <p className='text-gray-300 sm:pt-0 pt-5 font-normal text-lg leading-[22px] tracking-[0.05em] text-justify overflow-hidden line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='sm:justify-end justify-start flex w-full pt-5'>
                            <button
                                type="button"
                                className="cursor-pointer rounded-full font-[oswald] uppercase bg-transparent px-[30px] sm:py-[15px] py-3 text-lg font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[26px] tracking-[0.02em]"
                                onClick={() => {
                                    navigate("/product")
                                }}
                            >
                                All categories
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto xl:px-0 px-[18px] lg:py-[100px] sm:py-[70px] py-[40px]'>
                <div className='xl:grid grid-cols-2 gap-5'>
                    <div className='md:flex gap-5 w-full'>
                        <div className="flex flex-col pt-5 text-base xs:text-3xl xl:text-xl font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 justify-between w-full">
                            <div className="self-start ml-5">{categoryList?.[0]?.name} </div>
                            <img
                                loading="lazy"
                                src={categoryList?.[0]?.image}
                                className="w-full rounded-[25px]"
                                alt='img'
                            />
                        </div>
                        <div className='flex flex-col gap-y-5 md:mt-0 mt-5 w-full'>
                            <div className="flex text-base xs:text-3xl xl:text-xl pr-5 font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 items-end">
                                <img
                                    loading="lazy"
                                    src={categoryList?.[1]?.image}
                                    className="lg:w-full md:w-[59%] xxs:w-full xl:w-[68%] 2xl:w-[191px] w-[191px] rounded-[25px]"
                                    alt='img'
                                />
                                <div className='pb-5'>{categoryList?.[1]?.name}</div>
                            </div>
                            <div className="flex flex-col pt-5 text-base xs:text-3xl xl:text-xl font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 justify-between h-full">
                                <div className="self-start ml-5">{categoryList?.[2]?.name}</div>
                                <img
                                    loading="lazy"
                                    src={categoryList?.[2]?.image}
                                    className="w-full rounded-[25px]"
                                    alt='img'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='md:flex gap-5 xl:mt-0 mt-5 w-full'>
                        <div className="flex flex-col pt-5 text-base xs:text-3xl xl:text-xl font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 justify-between w-full">
                            <div className="self-start ml-5">{categoryList?.[3]?.name}</div>
                            <img
                                loading="lazy"
                                src={categoryList?.[3]?.image}
                                className="w-full rounded-[25px]"
                                alt='img'
                            />
                        </div>
                        <div className='flex flex-col gap-y-5 md:mt-0 mt-5 w-full'>
                            <div className="flex text-base xs:text-3xl xl:text-xl font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 justify-between">
                                <div className='pt-5 pl-5'>{categoryList?.[5]?.name}</div>
                                <img
                                    loading="lazy"
                                    src={categoryList?.[5]?.image}
                                    className="sm:w-full w-[191px] rounded-[25px]"
                                    alt='img'
                                />
                            </div>
                            <div className="flex text-base xs:text-3xl xl:text-xl pr-5 font-bold tracking-wide leading-10 uppercase bg-white rounded-[25px] text-gray-300 items-end">
                                <img
                                    loading="lazy"
                                    src={categoryList?.[4]?.image}
                                    className="w-full rounded-[25px]"
                                    alt='img'
                                />
                                <div className="pb-5">{categoryList?.[4]?.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto xl:px-0 px-[18px] pb-[52px] lg:pt-[100px] sm:pt-[70px] pt-[30px]'>
                <div className='sm:flex justify-between items-center'>
                    <div className='sm:w-2/4 w-full'>
                        <h1 className='text-gray-300 font-[oswald] font-bold xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[35px] xl:leading-[91px] lg:leading-[62px] sm:leading-[50px] leading-[45px] tracking-[0.01em] uppercase'>
                            Most Selling products
                        </h1>
                    </div>
                    <button
                        type="button"
                        className="rounded-full font-[oswald] sm:mt-0 mt-5 uppercase bg-transparent px-[30px] sm:py-[15px] py-3 text-lg font-bold text-gray-300 border-[1.5px] border-gray-300 leading-[26px] tracking-[0.02em]"
                        onClick={() => {
                            navigate("/product")
                        }}
                    >
                        more products
                    </button>
                </div>
                <div className='sm:pt-[100px] pt-10'>
                    <div className='productSlide'>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <Collection />
            <DetailSection />
            <Benefit />
            <Testimonial />
            <Footer />
        </div>
    )
}