import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import { fetchPosts } from '../queries';
import { sanityClient } from '../sanity';

export default function Home({ posts }: Posts) {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed posts={posts} />
    </div>
  )
}


export async function getServerSideProps() {
  let posts = await sanityClient.fetch(fetchPosts);
  return {
    props: {
      posts
    }
  }
}
