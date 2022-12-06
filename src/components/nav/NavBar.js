import styles from './NavBar.module.css'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

function NavBar () {
    return (
      
            <ul className={styles.nav}>
                    <li><FaInstagram /></li>
                    <li><FaWhatsapp /></li>
                    <li><FaFacebook /></li>
            </ul>

    )
}

export default NavBar