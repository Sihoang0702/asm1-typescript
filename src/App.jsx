import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage,  Detail, Dashborad, Products, AddProduct, UpdateProduct  } from './pages'
function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, [])


  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",         
    }).then(() => setProducts(products.filter((item) => item.id != id)))
  }

  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  } 
  const updateProduct = (product) => {
    fetch (`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products}/>} />
        <Route path='/detail/:id' element={<Detail products={products}/>} />
        <Route path='/admin' element={<Dashborad />} />
        <Route path='/admin/product' element={<Products products={products} deleteProduct={deleteProduct}/>} />
        <Route path='/admin/product/add' element={<AddProduct addProduct={addProduct} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProduct updateProduct={updateProduct} product={products  } />} />
      </Routes>
    </>
  )
}

export default App
 