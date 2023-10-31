import style from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { ReactElement, createContext, useContext, useState } from 'react'
import useProduct from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interface';


export const  ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext









export const ProductCard = ({children, product }: ProductCardProps) => {
  
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={style.productCard}>

        {children}
        {/* <ProductImage img={product.img}/>

<ProductTitle title={product.title}/>

<ProductButtons 
increaseBy={increaseBy}
counter={counter}/>
*/}
      </div>
    </Provider>
  )
}

