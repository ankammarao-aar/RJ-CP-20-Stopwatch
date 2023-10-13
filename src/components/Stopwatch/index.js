// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isActive: false, seconds: 0}

  componentWillUnmount() {
    clearImmediate(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isActive: true})
  }

  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  getSeconds = () => {
    const {seconds} = this.state
    const second = Math.floor(seconds % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  getMinutes = () => {
    const {seconds} = this.state
    const minute = Math.floor(seconds / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isActive: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({isActive: false, seconds: 0})
  }

  render() {
    const {isActive} = this.state

    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="time-img-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="clock-img"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="head">
              {this.getMinutes()}:{this.getSeconds()}
            </h1>
            <div className="buttons-card">
              <button
                type="button"
                className="start-button"
                onClick={this.onStart}
                disabled={isActive}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
