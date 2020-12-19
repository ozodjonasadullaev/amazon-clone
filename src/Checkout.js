import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <img
                className='checkout__add'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349268_.jpg'
                alt=''
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more
                        products, click "Add to basket" next to the product
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map((item, index) => (
                        <CheckoutProduct
                            key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Checkout;
