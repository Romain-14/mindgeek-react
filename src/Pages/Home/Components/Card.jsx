import React from 'react'

function Card({title, text}) {
  return (
    <article>
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
  )
}

export default Card