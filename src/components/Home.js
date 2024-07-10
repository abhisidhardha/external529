import React from 'react'
import "./Home.css"
function Home(){
  const products = [
    {
      id: 1,
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
      title: 'Apple iPhone 15',
      description: 'Black, 128 GB',
      price: 799999,
      stock: 'Out Of Stock',
      stockStatus: false
    },
    {
      id: 2,
      image: 'https://images-cdn.ubuy.co.in/666e62a4b5dc903d857b1d54-samsung-galaxy-s21-ultra-5g-128gb.jpg',
      title: 'Samsung Galaxy S21 Ultra',
      description: 'Phantom Black, 256GB',
      price: 129999,
      stock: 'In Stock',
      stockStatus: true
    },
    {
      id: 3,
      image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/3879f792-66e0-43ec-adf4-73cbb0bfad64_416x416.jpg',
      title: 'OnePlus 9 Pro',
      description: 'Morning Mist, 128GB',
      price: 53000,
      stock: 'Out Of Stock',
      stockStatus: false
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UF1000,1000_QL80_.jpg',
      title: 'Google Pixel 6',
      description: 'Sorta Seafoam, 128GB',
      price: 65999,
      stock: 'In Stock',
      stockStatus: true
    }
  ];
  return (
    <div className='home d-flex row'>
      {products.map((product) => (
        <div  className="d-flex col-3 p-2">
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
            className='img-fluid'
            width="200px"
          />
          <div className="">
            <h1 className="fs-5">{product.title}</h1>
            <p className="">{product.description}</p>
            <p className="">Rs.{product.price}</p>
            <p className={` ${product.stockStatus ? 'text-success' : 'text-danger'}`}>
              {product.stock}
            </p>
            <div className="">
              <button className="btn btn-outline-info">Add to Cart</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}
export default Home