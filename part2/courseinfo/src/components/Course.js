const Header = (props) => {
  return(
    <h2>{props.course.name}</h2>
  )
}

const Part = (props) => {
  return(
    <p>
        {props.part.name} {props.part.exercises}
    </p>
    
  )
}

const Content = (props) =>{
  return ( 
    <div>
      {props.course.parts.map(part => <Part key = {part.id} part = {part}/>)}
    </div>
  )
}

const Total = (props)=> {
  return(
    <>
      <p><b>total of {props.course.parts.reduce((total,part)=>total+part.exercises,0)} exercises</b></p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content course = {course}/>
      <Total course = {course} />
      
    </div>
  )
}

export default Course;