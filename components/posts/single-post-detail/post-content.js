import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";
const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    imageName: "getting-started-nextjs.png",
    date: "2022-02-10",
    content: "# This is a first post"
};



function PostContent(props) {
    const { singlePost } = props;
    const imagePath = `/images/posts/${singlePost.slug}/${singlePost.imageName}`;

    const customComponents = {
        img(image) {
            return <Image src={`/images/posts/${singlePost.slug}/${image.src}`} alt={image.alt} width={600} height={300} />;
        }
        
    };
    return <article className={styles.content}>
        <PostHeader title={singlePost.title} imagePath={imagePath} />
        <ReactMarkdown components={customComponents}>{singlePost.content}</ReactMarkdown>
    </article>;
}

export default PostContent;