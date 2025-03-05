import React, { useEffect, useRef, useState } from 'react';
import filterIcon from '../../../src/assets/images/filterIcon.svg';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import searchIcon from '../../../src/assets/images/searchIcon.svg';
import closeIcon from '../../../src/assets/images/closeIcon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chevronRight from '../../../src/assets/images/chevronRight.svg';
import FilterCard from './FilterCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/ApiSlice/categorySlice';
import { getProductTagList } from '../../store/ApiSlice/productTagSlice';
import { getProductAttribute, getProductDetail, getProductFilterDetail, getProductVariant } from '../../store/ApiSlice/productSlice';



const filterFabrics = [
    { label: "Cotton", key: "cotton" },
    { label: "Linen", key: "linen" },
    { label: "Silk", key: "silk" },
    { label: "Velvet", key: "velvet" },
    { label: "Net", key: "net" },
];

const filterSizes = [
    { label: "XS", key: "xs" },
    { label: "S", key: "s" },
    { label: "M", key: "m" },
    { label: "L", key: "l" },
    { label: "XL", key: "xl" },
    { label: "2XL", key: "2xl" },
    { label: "3XL", key: "3xl" },
];

const filterDiscount = [
    { label: "0% - 40%", key: "40%" },
    { label: "40% - 60%", key: "60%" },
    { label: "60% - 100%", key: "100%" },
    { label: "sports collection", key: "sports" },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};
const fashionSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};

const FilterSection = ({ title, items, sectionKey, selectedFilters, onFilterChange }) => (
    <div className='space-y-3'>
        <h2 className='text-gray-300 font-semibold text-[19px] leading-[23px]'>{title}</h2>
        {items?.map(item => {
            console.log("0000000000000", item);

            return (
                <div key={item._id} className='flex gap-2 items-center'>
                    <input type='checkbox'
                        className='rounded-[5px] h-[17px] w-[17px] border-[1.5px] border-gray-300'
                        checked={(selectedFilters[sectionKey] || [])?.includes(item._id) || false}
                        onChange={() => onFilterChange(sectionKey, item?._id)}
                    />
                    <p className='font-normal text-base leading-[20px] tracking-[0.02em]'>{item.label}</p>
                </div>
            )
        })}
    </div>
);

const FilterContent = ({ value, setValue, filterCategories, filterCollections, filterFabric, filterSize, handleFilterChange, selectedFilters }) => (
    <div className='space-y-5 lg:pb-0 pb-[100px]'>
        <div className='items-center gap-[15px] lg:flex hidden'>
            <div className='bg-gray-300 rounded-full flex items-center justify-center w-[35px] h-[35px]'>
                <img src={filterIcon} alt='Filters Icon' />
            </div>
            <p className='font-bold text-[28px] text-gray-300 leading-[41px] tracking-[0.02em]'>Filters</p>
        </div>
        <FilterSection
            title="Filter by Category"
            items={filterCategories}
            sectionKey="category"
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
        <FilterSection
            title="Filter by Collection"
            items={filterCollections}
            sectionKey="collection"
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
        <FilterSection
            title="Filter by Fabric"
            items={filterFabric}
            sectionKey="fabric"
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
        <FilterSection
            title="Filter by Size"
            items={filterSize}
            sectionKey="size"
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
        <FilterSection
            title="Filter by Discount"
            items={filterDiscount}
            sectionKey="discount"
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
        />
        <div className='space-y-3 priceFilter'>
            <h2 className='text-gray-300 font-semibold text-[19px] leading-[23px]'>Filter By Price</h2>
            <InputRange
                minPrice={0}
                maxPrice={1000}
                value={value}
                onChange={value => setValue(value)}
            />
            <div className="mt-2.5">
                <div className='flex gap-2 items-center'>
                    <input
                        type='number'
                        value={value.min}
                        onChange={e => setValue({ ...value, min: parseInt(e.target.value) })}
                        placeholder='Min'
                        className='w-full border border-gray-100 rounded-[11px] p-3 focus:outline-none'
                    />
                    <p>To</p>
                    <input
                        type='number'
                        value={value.max}
                        onChange={e => setValue({ ...value, max: parseInt(e.target.value) })}
                        placeholder='Max'
                        className='w-full border border-gray-100 rounded-[11px] p-3 focus:outline-none'
                    />
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 z-50 lg:hidden">
                <button
                    className="rounded-full w-full flex justify-center items-center gap-4 font-[oswald] uppercase bg-gray-300 sm:p-[18px] p-3 text-[17px] font-bold text-white leading-[25px] tracking-[0.02em]"
                >
                    Apply
                </button>
            </div>
        </div>
    </div>
);

const FilterModal = ({ isOpen, onClose, value, setValue }) => {
    if (!isOpen) return null;

    return (
        <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-[40%]">
            <div className="relative w-auto">
                <div className="border-0 rounded-r-[20px] shadow-lg relative p-5 w-full bg-white outline-none focus:outline-none">
                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex items-center gap-[15px]'>
                            <p className='font-[oswald] font-bold text-[28px] text-gray-300 leading-[41px] tracking-[0.02em] uppercase'>Filters</p>
                        </div>
                        <button onClick={onClose} className="text-gray-300 font-bold text-lg">
                            <img src={closeIcon} alt='close-Icon' className='h-[18px] w-[18px]' />
                        </button>
                    </div>
                    <FilterContent value={value} setValue={setValue} />
                </div>
            </div>
        </div>
    );
};

export default function ProductFilter() {
    const [value, setValue] = useState({ min: 0, max: 1000 });
    console.log("valuevaluevalue", value);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('All');
    const { categoryList } = useSelector((state) => state.category)
    const { productTagDetail } = useSelector((state) => state.productTag)
    const { productVariantDetail, productAttributeDetail } = useSelector((state) => state.product)
    console.log("productVariantDetailproductVariantDetail", productVariantDetail);

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        collection: [],
        fabric: [],
        size: [],
        discount: [],
    });
    const dispatch = useDispatch()
    console.log("selectedFiltersselectedFilters", selectedFilters);


    const handleFilterChange = (sectionKey, id) => {
        setSelectedFilters(prevState => {
            const isSelected = prevState[sectionKey]?.includes(id);
            const updatedSection = isSelected
                ? prevState[sectionKey].filter(itemId => itemId !== id) // Remove `_id`
                : [...prevState[sectionKey], id]; // Add `_id`

            return { ...prevState, [sectionKey]: updatedSection };
        });
    };

    const findfabricVariant = productAttributeDetail?.find((item) => item?.name === "Fabric")
    const findSizeVariant = productAttributeDetail?.find((item) => item?.name === "Size")
    const findfabricDetail = productVariantDetail?.filter((item) => item?.attributeId === findfabricVariant?._id)
    const findSizeDetail = productVariantDetail?.filter((item) => item?.attributeId === findSizeVariant?._id)

    const filterCategories = categoryList.map(item => ({
        _id: item?._id,
        label: item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase(),
        key: item.name.toLowerCase().replace(/[^a-z0-9]/g, "")
    }));

    const filterCollections = productTagDetail.map(item => ({
        _id: item?._id,
        label: item.name,
        key: item.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "")
            .replace(/collection$/, "")
    }));

    const filterFabric = findfabricDetail?.map((item) => ({
        _id: item?._id,
        label: item?.name,
        key: item?.name.toLowerCase()
            .replace(/[^a-z0-9]+/g, "")
            .replace(/collection$/, "")
    }))
    const filterSize = findSizeDetail?.map((item) => ({
        _id: item?._id,
        label: item?.name,
        key: item?.name.toLowerCase()
            .replace(/[^a-z0-9]+/g, "")
            .replace(/collection$/, "")
    }))

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getProductTagList())
        dispatch(getProductVariant())
        dispatch(getProductAttribute())
    }, [])

    useEffect(() => {
        const ctegoryId = selectedFilters?.category.join(",")
        const collectionId = selectedFilters?.collection.join(",")
        const fabricId = selectedFilters?.fabric.join(",")
        const sizeId = selectedFilters?.size.join(",")
        dispatch(getProductFilterDetail({ ctegoryId, collectionId, fabricId, sizeId, value }))
    }, [selectedFilters?.category, selectedFilters?.collection, selectedFilters?.size, value])

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = ['All', 'Hoodies', 'Jackets', 'Pants', 'Shirts', 'Blazers', 'Skirts', 'Dresses', 'Caps', 'Undergarments', 'Ethnic'];

    const siderPreview = useRef();
    const sliderRight = () => {
        siderPreview.current.slickNext();
    };

    return (
        <>
            <div className='container mx-auto lg:pb-32 pb-[70px] xl:px-0 px-[18px] relative'>
                <div className='grid lg:grid-cols-4 gap-[30px]'>
                    <div className='lg:grid hidden grid-cols-1 relative'>
                        <div className='bg-white rounded-[40px] sticky p-[25px] h-[850px] overflow-y-auto hide-scroll'>
                            <FilterContent
                                value={value}
                                setValue={setValue}
                                filterCategories={filterCategories}
                                filterCollections={filterCollections}
                                filterFabric={filterFabric}
                                filterSize={filterSize}
                                handleFilterChange={handleFilterChange}
                                selectedFilters={selectedFilters}
                            />
                        </div>
                    </div>
                    <div className='grid col-span-3 h-fit'>
                        <div className="relative flex gap-2.5">
                            <div className="absolute lg:top-5 top-3 left-[22px] flex pointer-events-none">
                                <img
                                    src={searchIcon}
                                    className="w-5 h-5"
                                    alt="search"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products here."
                                className="px-2 h-max lg:text-lg text-base pl-14 font-normal lg:leading-[22px] leading-5 w-full bg-slate border-[1.5px] lg:py-[18px] py-3 rounded-[50px] border-gray-300 focus:outline-none placeholder:text-gray-200 text-gray-300"
                            />
                            <div
                                className='border border-gray-300 rounded-full flex items-center lg:hidden justify-center w-11 h-11'
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img src={filterIcon} alt='Filters Icon' className='w-3.5 h-3.5 invert' />
                            </div>
                        </div>
                        <div className="flex flex-col w-full overflow-hidden">
                            <div className="lg:mb-[30px] mb-5 mt-5 gap-3 tabSlider relative">
                                <Slider {...settings} ref={siderPreview} className='slideArrow'>
                                    {tabs.map((tab) => (
                                        <button key={tab} onClick={() => handleTabClick(tab)} className={`w-full py-2.5 px-5 rounded-[50px] cursor-pointer border-[1.5px] border-gray-300 font-medium text-lg leading-[22px] tracking-[0.02em] ${activeTab === tab ? 'bg-gray-300 text-white' : 'text-gray-300'}`}>
                                            {tab}
                                        </button>
                                    ))}
                                </Slider>
                                <div
                                    className="absolute h-[43px] w-[43px] bg-[#000000] text-white rounded-full py-3.5 px-2.5 top-0 right-0"
                                    onClick={() => sliderRight()}
                                >
                                    <img src={chevronRight} className='h-auto w-auto invert' alt='favouritr' />
                                </div>
                            </div>
                            {activeTab === 'All' && (
                                <>
                                    <div className='grid xl:grid-cols-3 xxs:grid-cols-2 grid-cols-1 md:gap-[30px] gap-2.5'>
                                        <FilterCard />
                                    </div>
                                    <div className='my-[30px]'>
                                        <div className='bg-gray-300 lg:rounded-[40px] rounded-[20px] lg:p-[30px] px-3 py-[15px]'>
                                            <h1 className='font-[Oswald] font-bold lg:text-[40px] text-[25px] lg:leading-[52px] leading-[35px] tracking-[0.01em] text-white flex justify-center text-center uppercase'>find the fashion that matches your style.</h1>
                                            <div className='mt-[15px]'>
                                                <div className='text-gray-200 list-inside list-disc uppercase font-medium lg:text-xl md:text-lg text-xs lg:leading-[25px] leading-[15px]'>
                                                    <Slider {...fashionSettings}>
                                                        <div className='!flex justify-around'><span className='lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full text-gray-200 list-item'></span>find your style</div>
                                                        <div className='!flex justify-around'><span className='lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full text-gray-200 list-item'></span>find your style</div>
                                                        <div className='!flex justify-around'><span className='lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full text-gray-200 list-item'></span>find your style</div>
                                                        <div className='!flex justify-around'><span className='lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full text-gray-200 list-item'></span>find your style</div>
                                                        <div className='!flex justify-around'><span className='lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full text-gray-200 list-item'></span>find your style</div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='grid xl:grid-cols-3 xxs:grid-cols-2 grid-cols-1 md:gap-[30px] gap-2.5'>
                                        <FilterCard />
                                        <FilterCard />
                                        <FilterCard />
                                        <FilterCard />
                                        <FilterCard />
                                        <FilterCard />
                                    </div> */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} value={value} setValue={setValue} />
        </>
    );
}
