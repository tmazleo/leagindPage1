import Form from "./form/Form";
import Logo from "./logo/Logo";
import styles from './Layout.module.css'

function Layout () {
    return (
        <div className={styles.container}>
            <Logo />
            <Form />
        </div>
    )
}

export default Layout