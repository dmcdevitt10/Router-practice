import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SearchScreen = () => {
  const navigate = useNavigate()
  const [inputNum, setInputNum] = useState(null)

  const changeNum = (e) => {
    setInputNum(e.target.value)
  }

  const handleSearch = () => {
    let num = +inputNum
    if(num){
      navigate(`/details/${num}`)
    }else{
      alert('Thats not a number')
    }
  }

  return (
    <div>
      <h1>Search</h1>
      <input type='text' placeholder='Type a number!' onChange={changeNum}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchScreen