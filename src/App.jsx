import './App.scss';
import './App.css';
import coffeeCupBeans from './assets/coffee-cup-beans.png';
import coffeeBlastOne from './assets/coffee_blast.png';
import cup from './assets/cup.png';
import facebookIcon from "./assets/facebook-icon.svg";
import instaIcon from "./assets/insta-icon.svg";
import youtubeIcon from "./assets/youtube-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";
import { Button } from './components/Button/Button';
import { Coffee_Style_Card } from './components/Coffee_Style_Card/Coffee_Style_Card';
import { Different_Cards } from './components/Different_Cards/Different_Cards';
import { coffee_style_card, different_card_section } from './data';

function App() {

    const signUpButton = {
        width: '100px'
    }


    return (
        <>
            <div className="bean-scene-hero-section">
                <div className='container'>
                    <nav className="bean-scene-nav">
                        <div className="bean-scene-nav-logo">
                            <span>Bean Scene</span>
                        </div>
                        <div className="bean-scene-nav-menu">
                            <a href="" className="bean-scene-nav-menu-links">Home</a>
                            <a href="" className="bean-scene-nav-menu-links">Menu</a>
                            <a href="" className="bean-scene-nav-menu-links">About Us</a>
                            <a href="" className="bean-scene-nav-menu-links">Contact Us</a>
                        </div>
                        <div className="bean-scene-nav-links">
                            <a href="">Sign In</a>
                            <Button buttonLabel="SignUp" style={signUpButton} />
                        </div>
                    </nav>
                    <div className="bean-scene-main-section">
                        <p>We've got your morning covered with</p>
                        <p>Coffee</p>
                        <p>It is best to start your day with a cup of coffee. Discover the
                            best flavours coffee you will ever have. We provide the best
                            <br />for our customers.
                        </p>
                        <Button buttonLabel="Order Now" style={{ marginTop: "20px" }} />
                    </div>
                </div>
            </div>

            <div className="discover-coffee-section">
                <div className="container">
                    <div className="discover-coffee-content-section">
                        <div className="discover-coffee-content">
                            <span>Discover the best coffee</span>
                            <span>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity
                                and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater.
                                There is no doubt that you will enjoy this coffee more than others you have ever tasted.</span>
                            <button>Learn more</button>
                        </div>
                        <div className="discover-coffee-image">
                            <img src={coffeeCupBeans} alt="coffee-cup-beans" />
                        </div>
                    </div>
                </div>
            </div>

            <img src={coffeeBlastOne} alt="coffee_blast_image" className='coffee-blast-one' />

            <div className="coffee-style-card-section">
                <div className='container'>
                    <div className="coffee-style-card-content-section">
                        <div className="coffee-style-card-text">
                            <span>Enjoy a new blend of coffee style</span>
                            <span>Explore all flavours of coffee with us. There is always a new cup worth experiencing</span>
                        </div>
                        <div className="coffee-style-cards">

                            {/* <Coffee_Style_Card /> */}

                            {coffee_style_card.map((item) => {
                               return( 
                               <Coffee_Style_Card
                                 key={item.id}
                                 image={item.image}
                                 alt_text={item.alt_text}
                                 title={item.title}
                                 ratio_text={item.ratio_text}
                                 price={item.price} />
                               )
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <div className="why-are-we-different-section">
                <div className="container">
                    <div className="why-are-we-different-content-section">
                        <div className="different-text-section">
                            <span>Why are we different?</span>
                            <span>We don’t just make your coffee, we make your day!</span>
                        </div>
                        <div className="different-card-section">

                            {/* <Different_Cards /> */}

                            {different_card_section.map((item) => {
                                return(
                                    <Different_Cards
                                     key={item.id}
                                     image={item.image}
                                     alt_text={item.alt_text}
                                     title={item.title}
                                     card_text={item.card_text}
                                     card_bottom_text={item.card_bottom_text}/>
                                )
                            })}

                        </div>
                        <div className="different-text-bottom-section">
                            <span className="different-card-text">Great ideas start with great coffee, Lets help you achieve that</span>
                            <span>Get started today.</span>
                        </div>
                        <Button buttonLabel="Join Us" />
                    </div>
                </div>
            </div>

            <div className="amazing-morning-section">
                <div className="container">
                    <div className="amazing-morning-content-section">
                        <div className="amazing-morning-content">
                            <span>Get a chance to have an
                                <br /> Amazing morning</span>
                            <span>We are giving you are one time opportunity to
                                <br /> experience a better life with coffee.</span>
                            <button>Order Now</button>
                        </div>
                        <div className="amazing-morning-image">
                            <img src={cup} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bean-scene-footer">
                <div className="container">
                    <div className="bean-scene-footer-content-section">
                        <div className="logo-with-icons-section">
                            <span>Bean Scene</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                            <div className="social-icons-section">
                                <img src={facebookIcon} alt="facebook-icon" />
                                <img src={instaIcon} alt="insta-icon" />
                                <img src={youtubeIcon} alt="youtube-icon" />
                                <img src={twitterIcon} alt="twitter-icon" />
                            </div>
                        </div>
                        <div className="about-menu-section">
                            <ul>
                                <li>About</li>
                                <li> <a href=""> Menu</a></li>
                                <li> <a href=""> Features</a></li>
                                <li> <a href=""> News and Blogs</a></li>
                                <li> <a href=""> Help and Supports</a></li>
                            </ul>
                        </div>
                        <div className="company-menu-section">
                            <ul>
                                <li>Company</li>
                                <li> <a href=""> How we work</a></li>
                                <li> <a href=""> Terms of service</a></li>
                                <li> <a href=""> Pricing</a></li>
                                <li> <a href=""> FAQ</a></li>
                            </ul>
                        </div>
                        <div className="contact-us-menu-section">
                            <ul>
                                <li>Contact Us</li>
                                <li> <a href=""> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</a></li>
                                <li> <a href=""> +1 202-918-2132</a></li>
                                <li> <a href=""> beanscene@mail.com</a></li>
                                <li> <a href=""> www.beanscene.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <img src="./assets/coffee pngwing 1.png" className="coffee-pngwing-1" alt="" />
                <img src="./assets/coffee pngwing 1.png" className="coffee-pngwing-2" alt="" /> */}
            </footer>

        </>
    )
}

export default App
