import styles from "../Style.module.css"

export const FeedbackOptions = ({ onClick }) => {
    return (
        <ul className={styles.OptionList}>
            <li><button type="button" onClick={() => onClick('good')}>Good</button></li>
            <li><button type="button" onClick={() => onClick('neutral')}>Neutral</button></li>
            <li><button type="button" onClick={() => onClick('bad')}>Bad</button></li>
        </ul>
    )
}