import Image from "next/image";
import styles from "../hero.module.css"

export default function Hero() {
    return (
        
        <main className={styles.herocontainer}>
            <div className={styles.heroimage}>
                <Image src={"/image.png"} height={350} width={300} alt="image" />
            </div>
            <h1 className={styles.heading1}>I AM UMMEDUA</h1>
            <p className={styles.skills}>
            As a passionate front-end developer, I specialize in crafting clean,<br /> responsive, and user-friendly interfaces using modern technologies<br /> like HTML, CSS, TypeScript, and Tailwind CSS. With a strong<br /> foundation in Next.js, I focus on creating efficient, fast, and scalable<br /> web applications. My goal is to deliver seamless user experiences through <br />thoughtful design and optimized performance, while continuously learning and <br />improving my skills with every project.
            </p>
        </main>
    );
}