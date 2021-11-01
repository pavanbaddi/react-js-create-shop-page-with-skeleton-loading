import React from 'react'
import styles from 'components/product-card.module.css'

export default function ProductCard( { product, ...props } ) {
    return (
        <div className={styles['product-card']} >
           <div className={styles['product-card-header']} >
                <div className={styles['product-card-image-wrapper']} >
                    <img src={product.image} className={styles['product-card-image']} alt="" />
                </div>
                <div>
                    <p className={styles['product-card-title']} >{product.title}</p>
                </div>
            </div> 
            <div className={styles['product-card-body']} >
                <img src={product.image} className={styles['product-card-body-image']} alt="" />
            </div> 
        </div>
    )
}
