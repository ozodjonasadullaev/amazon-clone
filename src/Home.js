import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <img
                className='home_image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=''
            />
            <div className='home__row'>
                <Product
                    id={12345}
                    title={'The Lean Startup: How Constant Innovation Creates'}
                    price={11.96}
                    rating={5}
                    image={
                        'https://i0.wp.com/www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg'
                    }
                />
                <Product
                    id={15}
                    title={
                        'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black'
                    }
                    price={123.9}
                    rating={4}
                    image={
                        'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg'
                    }
                />
            </div>
            <div className='home__row'>
                <Product
                    id={145}
                    title={'Amazon Basics Premium Gaming Headset for PC '}
                    price={78.99}
                    rating={4}
                    image={
                        'https://m.media-amazon.com/images/I/71D8ezCQkSL._AC_UY218_.jpg'
                    }
                />
                <Product
                    id={65}
                    title={'Grand Seiko Sport Automatic Spring Drive Caliber'}
                    price={48.96}
                    rating={5}
                    image={
                        'https://images-na.ssl-images-amazon.com/images/I/71XzxEw9plL._AC_UY500_.jpg'
                    }
                />
                <Product
                    id={78}
                    title={
                        'Moto G Stylus | Unlocked | Made for US by Motorola  '
                    }
                    price={754.96}
                    rating={3}
                    image={
                        'https://m.media-amazon.com/images/I/71Swc5WsxrL._AC_UY218_.jpg'
                    }
                />
            </div>

            <div className='home__row'>
                <Product
                    id={68}
                    title={'Schwinn Discover Hybrid Bike for Men and Women'}
                    price={125}
                    rating={5}
                    image={
                        'https://m.media-amazon.com/images/I/91MterAXT+L._AC_UL320_.jpg'
                    }
                />
            </div>
        </div>
    );
}

export default Home;
