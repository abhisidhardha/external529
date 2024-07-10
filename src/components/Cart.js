import React from 'react';
import './Cart.css';
const products = [
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
    title: 'Apple iPhone 15',
    description: 'Black, 128 GB',
    stock: 'Out Of Stock',
    stockStatus: false
  },
  {
    id: 2,
    image: 'https://images-cdn.ubuy.co.in/666e62a4b5dc903d857b1d54-samsung-galaxy-s21-ultra-5g-128gb.jpg',
    title: 'Samsung Galaxy S21 Ultra',
    description: 'Phantom Black, 256GB',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 3,
    image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/3879f792-66e0-43ec-adf4-73cbb0bfad64_416x416.jpg',
    title: 'OnePlus 9 Pro',
    description: 'Morning Mist, 128GB',
    stock: 'Out Of Stock',
    stockStatus: false
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UF1000,1000_QL80_.jpg',
    title: 'Google Pixel 6',
    description: 'Sorta Seafoam, 128GB',
    stock: 'In Stock',
    stockStatus: true
  }
];

function Cart() {
  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
          />
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-description fs-5">{product.description}</p>
            <p className={`card-stock ${product.stockStatus ? 'text-success' : 'text-danger'}`}>
              {product.stock}
            </p>
            <div className="card-actions">
              <button className="btn btn-outline-info">Save for Later</button>
              <button className="btn btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
