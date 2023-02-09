import { useState } from 'react'

const Header = () => {
  return(
    <>
    <h2>give feedback</h2>
    </>
  )
}

const StatisticLine = ({text,value,percChar}) => {
    return (
      <Display text = {text} value = {value} percChar = {percChar} />
    )
  
}

const Statistics = ({ good, neutral, bad }) => {
  
  if(good !== 0 || neutral !== 0 || bad !== 0) {
    return(
      <>
      <h2>statistics</h2>
      <StatisticLine text = 'good' value = {good} percChar = '' />
      <StatisticLine text = 'neutral' value = {neutral} percChar = '' />
      <StatisticLine text = 'bad' value = {bad} percChar = '' />
      <StatisticLine text = 'all' value = {good+neutral+bad} percChar = '' />
      <StatisticLine text = 'average' value = {(good-bad)/(good+neutral+bad)} percChar = '' />
      <StatisticLine text = 'positive' value = {100*good/(good+neutral+bad)} percChar = '%'/>
      </>
    )
  }
  return(
    <>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </>
  )
}

const StatisticsTableRow = ({text,value,percChar}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {percChar} </td>
    </tr>
  )
}

const StatisticsTable = ({good, neutral, bad}) =>{
  return(
    <>
    <h2>statistics</h2>
    <table>
      <StatisticsTableRow text = 'good' value = {good} percChar = '' />
      <StatisticsTableRow text = 'neutral' value = {neutral} percChar = '' />
      <StatisticsTableRow text = 'bad' value = {bad} percChar = '' />
      <StatisticsTableRow text = 'good' value = {good} percChar = '' />
      <StatisticsTableRow text = 'all' value = {good+neutral+bad} percChar = ''/>
      <StatisticsTableRow text = 'average' value = {(good-bad)/(good+neutral+bad)} percChar = '' />
      <StatisticsTableRow text = 'positive' value = {100*good/(good+neutral+bad)} percChar = '%'/>
    </table>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return(
    <div>
      {props.text} {props.value} {props.percChar}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const incrementGood = (value) =>{
    const handler = () => {
      setGood(value+1)
      console.log('The value of good was updated to', value+1)
    }
    return handler
  }

  const incrementNeutral = (value) =>{
    const handler = () => {
      setNeutral(value+1)
      console.log('The value of neutral was updated to', value+1)
    }
    return handler
  }

  const incrementBad = (value) =>{
    const handler = () => {
      setBad(value+1)
      console.log('The value of bad was updated to', value+1)
    }
    return handler
  }

  return (
    <div>
      <Header />
      <Button handleClick = {incrementGood(good)} text = 'good'/>
      <Button handleClick = {incrementNeutral(neutral)} text = 'neutral'/>
      <Button handleClick = {incrementBad(bad)} text = 'bad'/>
      <StatisticsTable good = {good} neutral = {neutral} bad = {bad} />
      
    </div>
  )
}

export default App;
