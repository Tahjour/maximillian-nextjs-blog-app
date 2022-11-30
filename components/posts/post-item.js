import Image from "next/image";
import Link from "next/link";
import styles from "./post-item.module.css";

function PostItem(props) {
    const { title, imageName, excerpt, date, slug } = props.post;
    const formatteddDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const imagePath = `/images/posts/${slug}/${imageName}`;
    const linkPath = `/posts/${slug}`;

    return <li className={styles.post}>
        <Link legacyBehavior href={linkPath}>
            <a>
                <div className={styles.image}>
                    <Image src={imagePath} alt={title} fill />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formatteddDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>;
}

export default PostItem;