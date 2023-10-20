/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import { FeedbackOptions } from './Elements/Buttons'
import { Statistics } from './Elements/Statistics'
import { Section } from './Elements/Section'
import { Notification } from './Elements/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = (name) => {
    this.setState(prev =>({
      [name.name]: prev[name.name] + 1,
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return Math.round((good / total) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const totalPercentage = this.countPositiveFeedbackPercentage()

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onFeedback={this.handleFeedback} options={Object.keys(this.state)}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
