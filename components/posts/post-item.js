import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import NotificationContext from "../../context/notification-context";
import styles from "./post-item.module.css";

function PostItem(props) {
    const notifiationCtx = useContext(NotificationContext);
    const { title, imageName, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const imagePath = `/images/posts/${slug}/${imageName}`;
    const linkPath = `/posts/${slug}`;

    function notificationHelper() {
        notifiationCtx.showNotification({
            title: "Loading Post...",
            message: "The post is loading...",
            status: "pending"
        });
    }

    return <li className={styles.post}>
        <Link legacyBehavior href={linkPath}>
            <a onClick={notificationHelper}>
                <div className={styles.image}>
                    <Image src={imagePath} alt={title} fill />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>;
}

export default PostItem;