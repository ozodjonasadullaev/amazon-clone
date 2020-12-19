import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: id,
        });
    };
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <img
                                key={i}
                                src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/96/white-medium-star_2b50.png'
                                alt=''
                                style={{ width: '15px' }}
                            />
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
