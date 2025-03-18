import React from 'react'
import "./Coffee_Style_Card.css"
import { Button } from '../Button/Button';
import { coffee_style_card } from '../../data';
// import { coffee_style_card } from '../../data';
export const Coffee_Style_Card = ({image, alt_text, title, ratio_text, price}) => {

    const coffeeStyleCardButtons = {
        position: "relative",
        top: "24px"
    }

    // return (
    //     coffee_style_card.map((item => {
    //         return (
    //             <div className="coffee-style-card">
    //                 <img src={item.image} alt="cappuccino" />
    //                 <div className="coffee-style-card-details">
    //                     <span className="coffee-product-name">{item.title}</span>
    //                     <span className="coffee-product-ratio">{item.ratio_text}</span>
    //                     <span className="coffee-product-price">{item.price}</span>
    //                 </div>
    //                 <Button buttonLabel="Order Now" style={coffeeStyleCardButtons} />
    //             </div>
    //         )
    //     }))
    // )

    return (
        <div className="coffee-style-card">
            <img src={image} alt={alt_text} />
            <div className="coffee-style-card-details">
                <span className="coffee-product-name">{title}</span>
                <span className="coffee-product-ratio">{ratio_text}</span>
                <span className="coffee-product-price">{price}</span>
            </div>
            <Button buttonLabel="Order Now" style={coffeeStyleCardButtons} />
        </div>

    )
}
