import { ProductCard as ProductCardHOC} from './ProductCard'

import { ProductButtons } from './ProductButtons';
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export{ ProductImage } from "./ProductImage";
export{ ProductButtons } from "./ProductButtons";
export{ ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;