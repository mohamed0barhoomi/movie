import React from 'react'
import Data from './Data'
import Film from './Film'

const List_film = () => {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px"}}>
      {Data.map(film => <Film film={film}/>)}
    </div>
  )
}

export default List_film
