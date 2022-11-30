import PostContent from "../../components/posts/single-post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";

function SinglePostDetailPage(props) {
    return <PostContent singlePost={props.singlePost} />;
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const singlePost = getPostData(slug);
    return {
        props: {
            singlePost: singlePost
        },
        revalidate: 600
    };
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(postFileName => {
        return postFileName.replace(/\.md/, '');
    });
    return {
        paths: slugs.map(slug => {
            return {
                params: {
                    slug: slug
                }
            };
        }),
        fallback: false
    };
}

export default SinglePostDetailPage;