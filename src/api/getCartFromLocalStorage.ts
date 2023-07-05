import { CartProps } from '../types/types';

export const getCartFromLocalStorage = (): CartProps[] => {
  const cartFromLocalStorage = localStorage.getItem("products");
  if (cartFromLocalStorage) {
    try {
      return JSON.parse(cartFromLocalStorage) as CartProps[];
    } catch (error) {
      console.error("Alert: There aren't a cart in the LocalStorage", error);
    }
  }
  return [];
};