import React from 'react'
import { different_card_section } from '../../data'
// import "./Different_Cards.scss"
import "./Different_Cards.css"

export const Different_Cards = ({image, alt_text, title, card_text, card_bottom_text}) => {
    // return(
    //     different_card_section.map((item) => {
    //         return (
    //             <div className="different-card">
    //                 <img src={item.image} alt="" />
    //                 <span className="different-card-title">{item.title}</span>
    //                 <span className="different-card-text">{item.card_text}</span>
    //                 <span className="different-card-bottom-text">{item.card_bottom_text}</span>
    //             </div>
    //         )
    //     })
    // )

    return (
        <div className="different-card">
            <img src={image} alt={alt_text} />
            <span className="different-card-title">{title}</span>
            <span className="different-card-text">{card_text}</span>
            <span className="different-card-bottom-text">{card_bottom_text}</span>
        </div>
    )
}
