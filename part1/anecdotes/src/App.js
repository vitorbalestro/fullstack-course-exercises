import { useState } from 'react'

function indexOfMaximum(array){
  var i = 0
  var maximum = i
  for(i=0; i<array.length; i++) {
    if(array[i] > array[maximum]) maximum = i
  }

  return maximum
}

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick} >
      {text}
    </button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const DisplayVotes = ({value}) => {
  return (
    <div>
      has {value} votes
    </div>
  )
}

const Display = ({text}) => {
  return(
    <div>
      {text}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  
  const [selected, setSelected] = useState(0)

  const initialVotesArray = new Array(anecdotes.length).fill(0)

  const [votesArray, setVotesArray] = useState(initialVotesArray)

  const updateAnecdote = () => {
    setSelected(Math.floor(Math.random()*8))
  }

  const handleVote = (index) => {
    const copyArray = votesArray.map((c,i) => {
      if(i===index) return c+1
      else return c
    })
    const handle = () => {
      setVotesArray(copyArray)
      }
    return handle
  }

  const max = indexOfMaximum(votesArray)
  
  console.log('Current anecdote on screen is', selected)
  console.log(votesArray)
 
  return (
    <div>
      <Header text = 'Anecdote of the day' />
      <Display text = {anecdotes[selected]} />
      <DisplayVotes value = {votesArray[selected]} />
      <Button handleClick = {handleVote(selected)} text = 'vote' />
      <Button handleClick = {updateAnecdote} text = 'next anecdote'/>
      <Header text = 'Anecdote with most votes' />
      <Display text = {anecdotes[max]} />
      <DisplayVotes value = {votesArray[max]} />
    </div>
  )
  
}

export default App;
