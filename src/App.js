import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import ProductLoader from 'components/loaders/product-loader'
import ProductCard from 'components/product-card'

function App() {

  const [products, setProducts] = useState([])

  useEffect( ()=>{
    init()
  }, [] )

  const init = async()=>{
    let res = await fetch( "https://fakestoreapi.com/products" )
    res = await res.json()
    
    setProducts([...res])
  }

  return (
    <>
      <div className={styles['container']} >
          <div>
              <h4 style={{textAlign:'center'}} >Shop</h4>
          </div>
          <div className={styles['product-items-container']} >
            {
              ( products.length )
                ? products.map( ( item, index ) => {
                    return ( <ProductCard key={index} product={item} /> )
                  } )
                : ( <ProductLoader count={5} /> )
            }
          </div>
        </div>      
    </>
  );

}


export default App;
