import styles from "../about.module.css"
import Image from "next/image"


export default function Aboutus(){
    return(
        <main className={styles.aboutcontainer}>
            <h1 className={styles.about}>About</h1>
        <div className={styles.aboutimage}>
            <Image src={"/image.png"} height={350} width={300} alt="image" />
        </div>
        <h2 className={styles.heading1}>I AM FRONTEND DEVELOPER</h2>
        <p className={styles.para}>
        As a passionate frontend developer, I specialize in building <br /> sleek, intuitive user interfaces with HTML, CSS,  and <br /> Tailwind CSS. Leveraging Next.js, I craft dynamic web <br /> applications optimized for performance and scalability. <br /> My projects are deployed efficiently on Vercel, with seamless <br />version control and collaboration through GitHub.
        </p>
    </main>
    )
}