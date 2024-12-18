import React from 'react';
import NavBar from './NavBar';


const Hero = () => {
    return (
        <div className=" bg-top bg-[#F7F9FB] bg-no-repeat bg-cover ">
        <NavBar/>
        <div className="min-h-screen flex-wrap flex ">
           
            <div className="flex flex-col container justify-center mx-auto text-center items-center">
                <h2 className='font-bold md:text-[64px] mx-auto lg:leading-[72px] leading-[55px] text-[45px] max-w-[700px]'>AI-Powered Search as a Service</h2>
                <p className="text-lg text-gray-600 sm:mt-10 mb-3 sm:mb-12">Unlock your content with KeySemantics.</p>
                    <button className="bg-[#191A42] text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-blue-700 transition">
                    Get started
                </button>
            </div>
        </div>
        </div>
    );
};

export default Hero;
