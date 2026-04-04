import React from 'react'
import Data from './Data'
import Film from './Film'

const List_film = ({ add_favorite }) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
      {Data.map(film => <Film key={film.id} film={film} add_favorite={add_favorite} />)}
    </div>
  )
}

export default List_film
