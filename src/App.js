import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state
      if (seconds > 59) {
        this.setState(({ minutes }) => ({
          minutes: minutes + 1,
          seconds: 0
        }))
      }

      this.setState(({ seconds }) => ({
        seconds: seconds + 1
      }))


    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { minutes, seconds } = this.state
    return (
      <div>
        <h1>Burada bulunduğunuz süre : {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

      </div>
    )
  }
}