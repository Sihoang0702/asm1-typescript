import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = ({products, deleteProduct}) => {
    const onHandlerDelete = (id) => {
        console.log("Product", id)
        deleteProduct(id)
        
    }
  return (
    <div>
        <Link to={ `/admin/product/add`}><button>Thêm mới sản phẩm</button></Link>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tên Sản phẩm</th>
      <th scope="col">Prce</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((item, index) => {
        return(
    
    <tr key = {index + 1}>
      <th scope="row" >{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button onClick={() => onHandlerDelete(item.id)}>Delete</button>
      <Link to={`/admin/product/update/${item.id}`}>
                  <button>Edit</button>
                </Link></td>
    </tr>
        )
    })}
  </tbody>
</table>

    </div>
  )
}

export default Products 