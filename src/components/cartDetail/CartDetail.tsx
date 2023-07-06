import { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import AuthContext from '../../context/AuthContext';
import { PostItemToApi } from '../../api/postItemToAPI';

import "./cartDetail.styles.css";
import { CartProps } from '../../types/types';

const CartDetail = () => {

    const productContext = useContext (ProductContext);
    const {userLogged, isAuthenticated} = useContext (AuthContext);
    const {cartState, handleDelete} = useContext (CartContext);
    const [userItemsCartState, setUserItemsCartState] = useState <CartProps[]>([]);
    const navigate = useNavigate ();
    
    const products = productContext.products;

    useEffect(() => {
        const filteredCartState = cartState.filter(user => user.user === userLogged);
        setUserItemsCartState(filteredCartState);
      }, [cartState, userLogged]);

    const cartTotalPrice = () => {
        let cartTotal = 0;
        userItemsCartState.forEach (({id, quantity}) => {
            const product = products.find (product => product.id === id);
            if (product) {
                cartTotal += product.price * quantity;
            };
        });
        return cartTotal;
    };

    const handleBuyNow = () => {
        if (!isAuthenticated) {
            window.alert ('User has to be logged to navigate to the profile area.');
            return <Navigate to={'/login'}></Navigate>
        }else {
            PostItemToApi(userItemsCartState);
            navigate('/private/profile');
        };
    };

  return (
    <>
        <div className='cartDetail-container'>
            {cartTotalPrice() !== 0 ? (
                <div className='card-body d-flex cartDetail-container__card cartDetail-container__cart text-end mb-3 justify-content-between'>
                        <h4 className='card-title'><b>Total account in cart:  {cartTotalPrice()}€</b></h4>
                        <button className='btn btn-success' onClick={handleBuyNow}>Buy now</button>
                </div>
            ) : (
                <div className='card-body d-flex cartDetail-container__card cartDetail-container__cart text-end mb-3 justify-content-between'>
                        <h4 className='card-title'><b>¡There's no products in the cart!</b></h4>
                </div>
            )
            }

            {userItemsCartState.map(({ id, size, quantity, user, commandId }) => {

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
                            <button className='col' onClick={() => handleDelete (commandId)}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-trash3-fill' viewBox='0 0 16 16'>
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                            </button>
                        </article>
                    )
                })}
        </div>
    </>
  );
};

export default CartDetail;