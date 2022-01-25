import { GetStaticProps } from 'next';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PortableText from 'react-portable-text';
import Header from '../../components/Header';
import { fetchPost, fetchSlugs } from '../../queries';
import { sanityClient, urlFor } from '../../sanity';

interface Props {
    post: Post
}

interface IFormInput {
    _id: string,
    name: string,
    email: string,
    comment: string
}

const Post = ({ post }: Props) => {
    const { formState: { errors }, handleSubmit, register } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log('data', data);
    }
    return <div>
        <Header />
        <img className='w-full h-40 object-cover' src={urlFor(post.mainImage).url()!} alt="" />
        <article className='max-w-3xl mx-auto p-3'>
            <h1 className='text-3xl mt-10 mb-5'>{post.title}</h1>
            <h1 className='font-light text-gray-500 mb-2 tetx-xl'>{post.description}</h1>
            <div className='flex items-center space-x-2'>
                <img src={urlFor(post.author.image).url()!} className='h-10 w-10 rounded-full' alt="" />
                <p className='text-sm font-extralight'>posted by {" "}
                    <span className='text-green-500 py-2'>
                        {post.author.name}
                    </span>{" "}
                    published at {new Date(post._createdAt).toLocaleString()}</p>
            </div>
            <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                className="mt-5"
                serializers={
                    {
                        h1: (props: any) => {
                            <h1 className='text-2xl font-bold my-5' {...props} />
                        },
                        h2: (props: any) => {
                            <h1 className='text-xl font-bold my-5' {...props} />
                        },
                        li: ({ children }: any) => {
                            <li className='list-disc ml-4'>{children}</li>
                        },
                        link: ({ href, children }: any) => {
                            <a className='hover:underline text-blue-500' href={href}>{children}</a>
                        }
                    }
                }
            />

            <hr className='my-5 mx-auto border border-yellow-400 max-w-lg' />

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-4 mb-10 max-w-2xl'>
                <h3 className='text-sm text-yellow-300'>Read the article?</h3>
                <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
                <hr className='py-3 mt-2' />
                <input type="hidden" {...register("_id")} name='_id' value={post._id} />
                <label className='flex flex-col border-slate-300 w-full p-2'>

                    <span className='font-semibold'>Name</span>
                    <input placeholder='Linus Torvalds'
                        {...register("name", { required: true })}
                        className='txtbox'
                        type="text" />
                </label>
                <label className='flex flex-col p-2'>
                    <span className='font-semibold'>Email</span>
                    <input placeholder='your@gmail.com'
                        {...register("email", { required: true })}
                        className='txtbox'
                        type="text" />
                </label>
                <label className='flex flex-col p-2'>
                    <span className='font-semibold'>Comment</span>
                    <textarea placeholder='Leave your comment'
                        {...register("comment", { required: true })}
                        className='txtbox h-48'
                        maxLength={8} />
                </label>
                <div className='space-y-2 p-5'>
                    {errors.name && (
                        <p className='text-xs text-red-600'>- The Name Field is Required</p>
                    )}
                    {errors.email && (
                        <p className='text-xs text-red-600'>- The Email Field is Required</p>
                    )}
                    {errors.comment && (
                        <p className='text-xs text-red-600'>- The Comment Field is Required</p>
                    )}
                </div>
                <button className='w-full text-center mt-2 bg-yellow-500 p-2 text-white
                 rounded-md'>Comment</button>
            </form>
        </article>
    </div>;
};

export default Post;


export async function getStaticPaths() {
    let slugs = await sanityClient.fetch(fetchSlugs);

    let paths = slugs.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let post = await sanityClient.fetch(fetchPost, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        revalidate: 2,
        props: {
            post
        }
    }
}
