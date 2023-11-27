import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { CSSProperties, ReactElement, createContext, useContext, useState } from 'react'
import useProduct from '../hooks/useProduct'
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interface';
import { JsxElement } from 'typescript';


export const  ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext


export interface Props {
  product: Product,
  //children?: ReactElement | ReactElement[]
  children: ( args: ProductCardHandlers) => JSX.Element,
  className?: string,
  style?: CSSProperties,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: InitialValues
}






export const ProductCard = ({children, product, className, style, onChange, value, initialValues }: Props) => {
  
  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues})

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
    }}>
      <div 
        className={ `${styles.productCard} ${className}` }
        style={style}
      >

        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,

            increaseBy,
            reset

          })
          
        }
        
      </div>
    </Provider>
  )
}

