import capuccino from './assets/cappuccino.png'
import macchiato from './assets/macchiato.png'
import chaiLatte from './assets/chai-latte.png'
import expresso from './assets/expresso.png'

import bestPrice from './assets/best-price 1.png'
import badge from './assets/badge 1.png'
import coffeeBeans from './assets/coffee-beans 1.png'
import coffeeCup from './assets/coffee-cup 1.png'

const coffee_style_card = [
    {
        id:1,
        image:capuccino,
        alt_text:"capuccino",
        title:"Cappuccino",
        ratio_text:"Coffee 50% | Milk 50%",
        price:"$8.50"
    },

    {
        id:2,
        image:macchiato,
        alt_text:"macchiato",
        title:"Macchiato",
        ratio_text:"Coffee 50% | Milk 50%",
        price:"$7.50",
    },

    {
        id:3,
        image:chaiLatte,
        alt_text:"chaiLatte",
        title:"Chai Latte",
        ratio_text:"Coffee 50% | Milk 50%",
        price:"$8.00",
    },
    {
        id:4,
        image:expresso,
        alt_text:"expresso",
        title:"Expresso",
        ratio_text:"Coffee 100%",
        price:"$6.00"
    }
]

const different_card_section = [

    {
        id:1,
        image:coffeeBeans,
        alt_text:"coffeeBeans",
        title:"Supreme Beans",
        card_text:"Beans that provides",
        card_bottom_text:"great taste"
    },
    {
        id:2,
        image:coffeeCup,
        alt_text:"coffeeCup",
        title:"High Quality",
        card_text:"We provide the",
        card_bottom_text:"highest quality"
    },
    {
        id:3,
        image:badge,
        alt_text:"badge",
        title:"Extraordinary",
        card_text:"Coffee like you have",
        card_bottom_text:"never tasted"
    },
    {
        id:4,
        image:bestPrice,
        alt_text:"bestPrice",
        title:"Affordable Price",
        card_text:"Our Coffee prices are",
        card_bottom_text:"easy to afford"
    }
]

export {coffee_style_card, different_card_section}; 