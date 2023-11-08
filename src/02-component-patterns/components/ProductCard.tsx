import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { CSSProperties, ReactElement, createContext, useContext, useState } from 'react'
import useProduct from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interface';


export const  ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext


export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[]
  className?: string,
  style?: CSSProperties
}






export const ProductCard = ({children, product, className, style }: Props) => {
  
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div 
        className={ `${styles.productCard} ${className}` }
        style={style}
      >

        {children}
        
      </div>
    </Provider>
  )
}

