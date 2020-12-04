import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removefromBasket = () => {
        //Removes item from basket
        //Need to improve
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image} />
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
                <button onClick={removefromBasket} className="checkoutproduct_button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
