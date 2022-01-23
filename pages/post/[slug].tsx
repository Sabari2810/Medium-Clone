import { GetStaticProps } from 'next';
import React from 'react';
import { fetchPost, fetchSlugs } from '../../queries';
import { sanityClient } from '../../sanity';

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {
    console.log('post', post);
    return <div></div>;
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
