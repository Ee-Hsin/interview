import { useState, useRef, useEffect } from "react"

export const Stopwatch: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  const intervalId = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [])

  const startTimer = () => {
    if (intervalId.current) {
      return
    }

    intervalId.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1)
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }

  const resetTimer = () => {
    stopTimer()
    setCounter(0)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Stopwatch
