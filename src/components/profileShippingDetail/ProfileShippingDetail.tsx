import { useContext, useEffect, useState } from 'react';

import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import AuthContext from '../../context/AuthContext';

import { CartProps } from '../../types/types';

import "./profileShippingDetail.styles.css";
import ItemsContext from '../../context/ItemsContext';
import getAllItems from '../../api/getAllItems';

const ProfileShippingDetail = () => {

    const productContext = useContext (ProductContext);
    const {userLogged} = useContext (AuthContext);
    const {cartState} = useContext (CartContext);
    const {items, changeItems} = useContext (ItemsContext)
    const [userItemsProfileState, setUserItemsProfileState] = useState <CartProps[]>([]);
    
    const products = productContext.products;

    useEffect (() => {
        if (items.length === 0 ){
            const getFetch = async () => {
                const allItems: CartProps[] = await getAllItems();
                const userItems: CartProps[] = allItems.filter ( item => item.user === userLogged );
                changeItems(userItems);
            }
            getFetch();
        }
    },[userLogged]);

    const cartTotalPrice = () => {
        let cartTotal = 0;
        items.forEach (({id, quantity}) => {
            const product = products.find (product => product.id === id);
            if (product) {
                cartTotal += product.price * quantity;
            };
        });
        return cartTotal;
    };

  return (
    <>
        <div className='cartDetail-container'>

            <div className='card-body cartDetail-container__details mb-3'>
                    <h6 className='card-title'><b>Hi {userLogged}, see the shipping details below.</b></h6>
                    <h5 className='card-title pt-3'><b>The total account of your shipping is:  {cartTotalPrice()}€</b></h5>
            </div>

            {items.map(({ id, size, quantity, user, commandId }) => {
                    const product = products.find((product) => product.id === id );

                    return (
                        <article className='cartDetail-container__card bg-light mb-3' key={commandId}>
                            <img className='col cartDetail-container__img' src={product?.img[0] } alt={`${product?.title} image`} />
                            <div className='card-body d-flex-column align-items-end cartDetail-container__body col'>
                                <div>
                                    <h4 className='card-title'><b>Model:</b><i> {product?.title} (Units: {quantity})</i></h4>
                                    <h6 className='card-text'><b>Price:</b> {product?.price}€</h6>
                                    <h4 className='card-text'>SubTotal: {product?.price ? product.price * quantity : 0 }€</h4>
                                </div>
                            </div>

                        </article>
                    )
                })}
        </div>
    </>
  );
};

export default ProfileShippingDetail;