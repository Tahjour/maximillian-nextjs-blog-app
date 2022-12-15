import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
    return <Fragment>
        <Head>
            <title>All Posts</title>
            <meta name="description" content="A list of all programming tutorials and posts!" />
        </Head>
        <AllPosts posts={props.allPosts} />;
    </Fragment>;
}

export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            allPosts: allPosts
        },
        revalidate: 600
    };
}

export default AllPostsPage;