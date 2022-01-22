import React from 'react';

const Feed = () => {
    return <div className='max-w-screen-lg mx-auto'>
        {/* Banner */}
        <div className='h-80 px-10 flex justify-between items-center bg-yellow-300'>
            <div className='space-y-3'>
                <h1 className='text-6xl font-serif max-w-lg'>
                    <span className="underline decoration-black">
                        Medium </span>
                    is a place to read, write and connect</h1>
                <h1>Its easy and free to post your thinking on any topic and
                    connect with millions of readers </h1>
            </div>
            <div className=''>
                <p className="sm:text-[100px] sm:inline-block hidden duration-300 ease-in md:text-[250px] font-serif font-extrabold">M</p>
            </div>
        </div>
        {/* Blog Feed */}
    </div>;
};

export default Feed;
