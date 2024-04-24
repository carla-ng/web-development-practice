import BannerBackground from "../assets/images/home-banner-background.png";
import BannerImage from "../assets/images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const FoodieMainSection = () =>  {
    return (
        <section className="main-section-container">

            <div className="main-bannerImage-container">
                <img src={BannerBackground} alt="Main section background image" />
            </div>

            <div className="main-text-section">
                <h1 className="primary-heading">
                    Your Favourite Food Delivered Hot & Fresh
                </h1>

                <p className="primary-text">
                    Chefs do all the prep work for you! Like peeling, chopping & marinating, so you can then cook your fresh food.
                </p>

                <button className="secondary-button">
                    Order Now <FiArrowRight />
                </button>
            </div>

            <div className="main-image-section">
                <img src={BannerImage} alt="Banner image of a bowl of food" />
            </div>

        </section>
    )
}

export default FoodieMainSection;