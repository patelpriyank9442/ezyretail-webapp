import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Testimonial from '../components/home/Testimonial';
import Benefit from '../components/home/Benefit';
import ProductFilter from '../components/discover/ProductFilter';

export default function Discover() {

    return (
        <div className='bg-slate h-auto'>
            <Header />
            <ProductFilter />
            <Benefit />
            <Testimonial />
            <Footer />
        </div>
    );
}
