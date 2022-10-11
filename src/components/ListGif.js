import React from 'react'
import Gif from './Gif'
import Search from './Search'
import './styles/gifs.css'

//const URL="https://api.giphy.com/v1/gifs/search?api_key=iNB9nC07NcEJWuR6Op3WgGqcUhP99vuM&q=spain&limit=25&offset=0&rating=g&lang=en"


export default function ListGif() {
    const [gifs,setGifs]= React.useState([])
    const [search, setSearch]=React.useState("spain")
    const URL=`https://api.giphy.com/v1/gifs/search?api_key=iNB9nC07NcEJWuR6Op3WgGqcUhP99vuM&q=${search}&limit=25&offset=0&rating=g&lang=en`

    React.useEffect(
        ()=>{          
          fetch(URL)
            .then(res=>res.json())
            .then(data=>setGifs(data.data))
        },[search])
        
  return (
    <div className='gifs'>
      <Search setSearch={setSearch} />
      <div className="gifList">
        {gifs.length?
          (gifs.map(gif=>(
            <Gif key={gif.id} id={gif.id} image={gif.images.fixed_height.url} />
          ))):null        
        }
      </div>      
    </div>
  )
}
