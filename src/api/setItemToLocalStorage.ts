import { CartProps } from '../types/types';
import { getCartFromLocalStorage } from './getCartFromLocalStorage';

export const setItemToLocalStorage = (product: CartProps): void => {

    const cartFromLocalStorage = getCartFromLocalStorage();

    cartFromLocalStorage.push(product);

    localStorage.setItem('products', JSON.stringify(cartFromLocalStorage) );
  
  }