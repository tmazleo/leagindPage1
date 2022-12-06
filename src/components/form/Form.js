import styles from './Form.module.css'

function Form () {
    return (
        <form className={styles.form}>
            <input type="text" name="name" id="name" placeholder="nome.." />
            <input type="email" name="email" id="email" placeholder="email.." />
            <textarea placeholder="escreva sua mensagem..">
            </textarea>
            <button onClick="">enviar</button>
        </form>

    )
}

export default Form