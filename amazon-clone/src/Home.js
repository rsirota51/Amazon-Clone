import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWQ5MDE4Nzgt/ZWQ5MDE4Nzgt-ODc4YjY0NzIt-w3000._CB410091533_.jpg" alt=""/>
            {/* Product id, title, price, rating, image */}
            <div className="home_row">
                <Product
                    id="1234"
                    title="High School DxD, Vol. 1 (light novel): Diablos of the Old School Building (High School DxD (light novel), 1)"
                    price={11}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T3FuzCibL._SX331_BO1,204,203,200_.jpg"
                />
                <Product
                    id="1235"
                    title="To Love-ru Darkness Art Book Harem Gold"
                    price={52}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51lu6GPWEyL._SX352_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1236"
                    title="Bandai Saint Cloth Myth EX Libra Shiryu Saint Seiya"
                    price={187}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61S0yXm3sGL._AC_SL1200_.jpg"
                />
                <Product
                    id="1237"
                    title="Bandai Hobby 167089 Shenlong Gundam XXXG-01S(EW) Battle Model, 1/100 Scale"
                    price={43}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/612GVHaK-UL._AC_SL1312_.jpg"
                />
                <Product
                    id="1238"
                    title="YU-GI-OH! - Odd-Eyes Rebellion Dragon (MP16-EN078) - Mega Pack 2016 - 1st Edition - Secret Rare"
                    price={11}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71NF62PEyIL._AC_SL1008_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1239"
                    title="Coleman SaluSpa Inflatable Hot Tub Spa, Green & White"
                    price={750}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81RyFCoOSdL._AC_SL1500_.jpg"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
