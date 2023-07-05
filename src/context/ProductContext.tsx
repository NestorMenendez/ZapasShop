import { FC, createContext, useState } from "react";
import { ProductProps, Props } from "../types/types";


const ProductContext = createContext<{ products: ProductProps[]; changeProducts: (newProducts: ProductProps[]) => void }>({ products: [], changeProducts: () => {} });


export const ProductProvider: FC<Props> = ({children}) => {

    const [products, setProducts] = useState<ProductProps[]>([]);

    const changeProducts = (newProducts: ProductProps[]) => {
        setProducts (newProducts);
    };

  return (
    <>
        <ProductContext.Provider value={ {products, changeProducts} }>
            {children}
        </ProductContext.Provider>
    </>
  );
};

export default ProductContext;