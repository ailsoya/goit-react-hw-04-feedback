import styles from "../Style.module.css"

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className={styles.StatList}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage}%</li>
        </ul>
    )
}