/* eslint-disable react/no-direct-mutation-state */
import { useState } from "react"
import { FeedbackOptions } from './Elements/Buttons'
import { Statistics } from './Elements/Statistics'
import { Section } from './Elements/Section'
import { Notification } from './Elements/Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (name) => {
    console.log(name)
    if(name === 'good') {
      setGood(good + 1)
    } else if(name=== 'neutral') {
      setNeutral(neutral + 1)
    } else if (name === 'bad') {
      setBad(bad + 1)
    }
  } 

  const countTotalFeedback = () => {
    const total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad
    return Math.round((good / total) * 100)
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {countPositiveFeedbackPercentage() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  )
}
