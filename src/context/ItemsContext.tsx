import { FC, createContext, useState } from "react";
import { Props, CartProps } from "../types/types";


const ItemsContext = createContext<{ items: CartProps[], changeItems: (newItems: CartProps[]) => void } >( { items: [], changeItems: () => {} } );


export const ItemsProvider: FC<Props> = ({children}) => {

    const [items, setItems] = useState<CartProps[]>([]);

    const changeItems = (newItems: CartProps[]) => {
        console.log ("entra en el cambio de items");
        setItems (newItems);
    };



  return (
    <>
        <ItemsContext.Provider value = { {items, changeItems} }>
            {children}
        </ItemsContext.Provider>
    </>
  );
};

export default ItemsContext;