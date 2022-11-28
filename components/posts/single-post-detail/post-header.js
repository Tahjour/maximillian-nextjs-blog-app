import Image from "next/image";
import styles from "./post-header.module.css";

function PostHeader() {
    const { title, imagePath } = props;
    return <header className={styles.header}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
    </header>;
}

export default PostHeader;