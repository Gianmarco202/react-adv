import style from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = ''}) => {

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
      <img className={style.productImg} src={imagToShow} alt='product img'/>
      )
  }