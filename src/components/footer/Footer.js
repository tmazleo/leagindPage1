import NavBar from "../nav/NavBar"
import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.container}>
            <NavBar />
            <div className={styles.copy}>
                <p>
                <span>LeoTB</span> &copy; 2022</p>
            </div>
        </footer>
    )
}

export default Footer