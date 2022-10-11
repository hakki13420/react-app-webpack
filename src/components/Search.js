import React from 'react'
import "./styles/search.css"

export default function Search({setSearch}) {
    const [keySearch, setKeySearch]=React.useState('')
    
    const handlChange=(e)=>{
        setKeySearch(e.target.value)
    }
    const submitForm=(e)=>{
        e.preventDefault()
        setSearch(keySearch)
    }
  return (
    <div className="search">
        <form onSubmit={submitForm}>
            <input type="text" placeholder='search...'  onChange={handlChange} />
        </form>
    </div>
  )
}
