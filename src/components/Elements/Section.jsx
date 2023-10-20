import styles from "../Style.module.css"

export const Section = ({ title, children }) => {
    return (
        <section className={styles.Section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}