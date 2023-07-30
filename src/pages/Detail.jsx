import React from 'react'
import { useParams } from 'react-router-dom'
const Detail = ({products}) => {
    const {id} = useParams()
    const currentProduct = products.find(item => item.id === Number(id))
  return (
    <div>
         <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.price}</p>
    </div>
  )
}

export default Detail