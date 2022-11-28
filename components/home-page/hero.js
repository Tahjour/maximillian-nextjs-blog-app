import Image from "next/image";
import styles from "./hero.module.css";

function Hero() {
    return <section className={styles.hero}>
        <div className={styles.image}>
            <Image src="/images/site/tahj.jpg" alt="An image showing Tahjour" width={300} height={300} />
        </div>
        <h1>I&apos;m Tahjour</h1>
        <p>
            I&apos;m just currently trying to finish this course so I can use what I&apos;ve learned to build my own projects.
        </p>
    </section>;
}

export default Hero;