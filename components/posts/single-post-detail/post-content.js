import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

SyntaxHighlighter.registerLanguage('javascript', js);

import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";
import { useContext, useEffect } from "react";
import NotificationContext from "../../../context/notification-context";

function PostContent(props) {
    const notificationCtx = useContext(NotificationContext);
    const { singlePost } = props;
    const imagePath = `/images/posts/${singlePost.slug}/${singlePost.imageName}`;

    useEffect(() => {
        notificationCtx.showNotification({
            title: "Loaded!",
            message: "The post has loaded.",
            status: "success"
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singlePost]);
    const customComponents = {
        // img(image) {
        //     return <Image src={`/images/posts/${singlePost.slug}/${image.src}`} alt={image.alt} width={600} height={300} />;
        // },
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className={styles.image}>
                        <Image src={`/images/posts/${singlePost.slug}/${image.properties.src}`} alt={image.properties.alt} width={600} height={300} />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
        code(code) {
            const { className, children } = code;
            const language = className.split("-")[1];
            return <SyntaxHighlighter style={atomDark} language={language}>
                {children}
            </SyntaxHighlighter>;
        }
    };

    return <article className={styles.content}>
        <PostHeader title={singlePost.title} imagePath={imagePath} />
        <ReactMarkdown components={customComponents}>{singlePost.content}</ReactMarkdown>
    </article>;
}

export default PostContent;