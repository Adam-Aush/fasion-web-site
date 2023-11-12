import promoGirl from "../../assets/img/models/header-img.jpg";
import './promo.css';


const Promo = () => {
    return <>
        <section className='promo'>
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                       <div className="promo__title">
                        <span className="highligth">
                            <span>LET’S</span>
                        </span>
                            
                            EXPLORE
                            <span className="highligth highligth--yellow">
                            <span>UNIQUE</span>
                        </span>
                            
                            CLOTHES.
                       </div>
                        <div className="promo__desc">
                        Live for Influential and Innovative fashion!
                        </div>
                       <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">Shop Now</a>
                       </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoGirl} alt="promoGirl" />
                    </div>
                </div>
                
            </div>
        </section>
    </>
}

export default Promo