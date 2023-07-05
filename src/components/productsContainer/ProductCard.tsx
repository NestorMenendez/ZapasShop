import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import getAllProducts from '../../api/getAllProducts';
import ProductContext from '../../context/ProductContext';

import { ProductProps } from '../../types/types';
import "./ProductsCard.styles.css"


export const ProductCard = () => {

    const {products, changeProducts} = useContext (ProductContext);

    useEffect (() => {
        if (products.length === 0 ){
            const getFetch = async () => {
                const allProducts: ProductProps[] = await getAllProducts();
                changeProducts(allProducts);
            }
            getFetch();

        }
    },[products]);

    return (

        <div className="productCards-container d-flex flex-wrap gap-4 justify-content-around overflow-auto">
          {products?.map(({ id, img, title, price, description }) => (
            <Link to={`/productDetail/${id}`} className="card" key={id}>
              <img className="card-img-top" src={img[0]} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.slice(0, 80)}...</p>
                <p className="card-text">
                  <small className="text-muted">Price: {price}€</small>
                </p>
              </div>
            </Link>
          ))}
        </div>
      );
};