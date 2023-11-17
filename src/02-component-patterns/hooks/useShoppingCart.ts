import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interface";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ( {count, product} : {count:number, product: Product} ) => {
    
    setShoppingCart(olShoppingCart => {
      
      const productInCart: ProductInCart = olShoppingCart[product.id] || {...product, count:0};

      if(Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count; 
        return{
          ...olShoppingCart,
          [product.id] : productInCart
        }
      }
      const { [product.id] : toDelete, ...rest} = olShoppingCart;
        return rest

      /* if(count === 0){
        const { [product.id] : toDelete, ...rest} = olShoppingCart;
        return rest
      }  

      return {
        ...olShoppingCart,
        [product.id]: {...product}
      } */
    })

  }
 
    return {

        shoppingCart,

        onProductCountChange
    }
}