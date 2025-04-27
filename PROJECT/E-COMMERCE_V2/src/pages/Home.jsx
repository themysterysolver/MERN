import React from 'react'
import { addToCart } from '../utils/localStorageUtils';
import {useEffect,useState} from 'react'
import Footer from '../components/Footer'
const Home = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>{setProducts(json)});
  },[]);

  return (
    <>
    <div className="container my-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map(prod => (
          <div key={prod.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img 
                src={prod.image} 
                alt={prod.title} 
                className="card-img-top" 
                style={{ objectFit: 'contain', height: '200px' }}/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: '1rem' }}>{prod.title}</h5>
                <p className="card-text fw-bold">${prod.price}</p>
                <button className="btn btn-primary mt-auto" 
                  onClick={() => addToCart({ productId: prod.id, name: prod.title, price: prod.price, quantity: 1 })}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  <Footer/>
  </>
);
  
}

export default Home
