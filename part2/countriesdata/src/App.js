import { useState, useEffect } from 'react'
import getBySubstring from './services/countries.js'
import DisplayCountries from './components/display.js'

const App = () => {

  const [filter, setFilter] = useState(null)
  const [countries, setCountries] = useState([])
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if(filter){
      getBySubstring(filter).then(response =>{ 
        setCountries(response)
        setNotFound(false)
      })
        .catch(error => {
          setNotFound(true)
        })
    }
  },[filter])
  const handleFilter = (event) => setFilter(event.target.value)
  
  
  return( 
    <div>
      <form> 
        find countries: &nbsp;
        <input onChange = {handleFilter} value={filter ? filter : ''} />
      </form>
      <DisplayCountries countries={countries} filter={filter} notFound={notFound} />
    </div>
  )
}

export default App;