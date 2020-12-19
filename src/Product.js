import React from 'react';
import './Products.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
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
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
