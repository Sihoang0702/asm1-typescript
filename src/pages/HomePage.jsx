import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({products}) => {
  return (
    <div>{products.map((item, index) => {
        return (
            <div key={index + 1}>
                <h2><Link to={`/detail/${item.id}`}>{item.name}</Link></h2>
                <p>{item.price}</p>
            </div> 
        )
    })}</div>
  )
}

export default HomePage