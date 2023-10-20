import styles from "../Style.module.css"

export const FeedbackOptions = ({ onFeedback, options }) => {
    return (
        <ul className={styles.OptionList}>
            {options.map(name => <li><button type="button" onClick={() => onFeedback({name})}>{name}</button></li>)}
        </ul>
    )
}