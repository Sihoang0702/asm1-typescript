import React from 'react'
import { useState } from 'react'

const AddProduct = ({addProduct}) => {
  const [data, setData] = useState({})
  const onHandleChange = (event) => {
    const {name, value} = event.target;
    const newData = { ...data, [name]: value } 
        setData(newData)
  }
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(data); 
}
  return (
    <div>
      <form action='' onSubmit={onHandleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Tên Sản phẩm
    </label>
    <input type="text" className="form-control" onChange={onHandleChange} name='name' />
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Giá sản phẩm
      </label>
      <input type="text" className="form-control" onChange={onHandleChange} name='price'/>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </div>
</form>

    </div>
  )
}

export default AddProduct