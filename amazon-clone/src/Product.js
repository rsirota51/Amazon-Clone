import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();
    const addtoBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {/*
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                        // Create an Array of Size Rating, Fill the Array, Loop/Map Through the Array
                    */}
                    <p> {"⭐".repeat(rating)}</p>
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addtoBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
