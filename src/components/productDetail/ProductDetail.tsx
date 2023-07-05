import { useContext, useState } from "react"
import { useParams } from 'react-router-dom'

import ProductsContext from "../../context/ProductContext"
import DetailBuyCard from "../detailBuyCard/DetailBuyCard"

import "./productDetail.styles.css"


const ProductDetail = () => {
    
    const {products} = useContext (ProductsContext);
    const [counter, setCounter] = useState (1);
    const params = useParams();
    // Pregunta milenaria. Teoricamente, se entra con un valor por id en la ruta, con lo cual jamás será undefined. Pero aún así lo tengo que trampear poniendole ""?
    const idNumber = parseInt(params.id || "");
    const product = products.find (productObj => productObj.id === idNumber );
    // useState to handle the image on the principal div ---------------------------------------------------------------------
    const [imgPrincipal, setImgPrincipal] = useState (product?.img[0]);
    
  return (
    <div className="productDetail-container d-flex-column">
        <div className="row">
            <div className="col-6 img-container">
                <div className="img-container__div-principal">
                    <img className="img-principal" src={imgPrincipal} alt="" />
                </div>
            </div>
            <div className="col d-flex flex-column justify-content-around detail-container">
                <div>
                    <div className="py-1">
                        <b>Model:</b> {products[0].title}
                    </div>
                    <div className="py-1">
                        <b>Description:</b> <i>{products[0].description}</i>
                    </div>
                    <div className="py-1">
                        <b>Price:</b> {products[0].price}€
                    </div>
                </div>
                <div className="detailBuyCard">
                    <DetailBuyCard counter={counter} setCounter={setCounter} idNumber={idNumber}/>
                </div>
            </div>
        </div>
        {/* Curiosidad: lo intenté así
        {(product?.img?.length ?? 0) >= 4 && <img className="img-secondary" src={product?.img[3]} onClick={() => setImgPrincipal(product?.img[3])} alt="db image 4" /> }
        Y no deja de dar errores ni poniendo dobles condicionales
        {(product?.img?.length ?? 0) >= 4 && product?img[3] && <img className="img-secondary" src={product?.img[3]} onClick={() => setImgPrincipal(product?.img[3])} alt="db image 4" /> } */}
        <div className="img-container__div-secondary d-flex justify-content-around">
            {product?.img?.map((img, index) => (
                <img
                    key={index}
                    className="img-secondary"
                    src={img}
                    onClick={() => setImgPrincipal(img)}
                    alt=""
                />
            ))}
        </div>
    </div>
  )
}

export default ProductDetail