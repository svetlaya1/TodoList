import footerStyles from './footer.module.css'


export const Footer = ({clearAllTodos}) => {

    const clearHandler = () => {
		clearAllTodos()
	}

    return (
        <footer className={footerStyles.wr}>
            <button onClick={clearHandler} type="submit" className="btn btn-warning">Удалить всё</button>
        </footer>
    )
}