import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
    return <AllPosts posts={props.allPosts} />;
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