import Link from 'next/link';
import React from 'react';
import { fetchPosts } from '../queries';
import { sanityClient, urlFor } from "../sanity";

const Feed = ({ posts }: Posts) => {
    return <div className='max-w-screen-lg mx-auto'>
        {/* Banner */}
        <div className='h-80 px-10 py-44 sm:py-0 flex justify-between items-center bg-yellow-300'>
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
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 p-2 lg:grid-cols-3'>
            {posts.map((post) => (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div className='group border-2 rounded-lg overflow-hidden'>
                        <img
                            className='h-60 w-full object-cover rounded-t-md group-hover:scale-105 transition-all ease-in-out'
                            src={
                                urlFor(post.mainImage).url()!
                            } alt="" />
                        <div className='flex items-center justify-between bg-white p-3'>
                            <div>
                                <p className='text-lg font-bold'>{post.title}</p>
                                <p className='text-sm'>{post.description} by {post.author.name}</p>
                            </div>
                            <img
                                className='h-12 w-12 rounded-full'
                                src={
                                    urlFor(post.author.image).url()!
                                } alt="" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>;
};

export default Feed;


