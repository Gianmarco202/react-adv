import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Prop {
  img? : string, 
  className?: string,
  style?: CSSProperties
}
export const ProductImage = ({ img= '', className, style}: Prop) => {

    const {product} = useContext(ProductContext)
    let imagToShow : string;
  
    if (img){
      imagToShow = img
    } else if (product.img) {
      imagToShow = product.img
    } else {
      imagToShow = noImg
    }
  
    return (
      <img 
        className={`${styles.productImg} ${className}`} 
        src={imagToShow}
        alt='product img'
        style={style}
      />
      )
  }