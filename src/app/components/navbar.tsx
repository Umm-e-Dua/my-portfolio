import Link from "next/link";
import styles from "../navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <ul className={styles.navList}>
                <Link href="/home"><li className={styles.navItem}>Home</li></Link>
                <Link href="/about"><li className={styles.navItem}>About</li></Link>
                <Link href="/contact"><li className={styles.navItem}>Contact</li></Link>
            </ul>
        </header>
    );
}
