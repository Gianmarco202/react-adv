import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interface";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ( {count, product} : {count:number, product: Product} ) => {
    
    setShoppingCart(olShoppingCart => {
      
      

      if(count === 0){
        const { [product.id] : toDelete, ...rest} = olShoppingCart;
        return rest
      }  

      return {
        ...olShoppingCart,
        [product.id]: {...product, count}
      }
    })

  }

    return {

        shoppingCart,

        onProductCountChange
    }
}