import AboutBackground from "../assets/images/about-background.png";
import AboutImage from "../assets/images/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const FoodieAboutSection = () => {

    return (
        <section className="about-section-container">

            <div className="about-background-image-container">
                <img src={AboutBackground} alt="About section background image" />
            </div>

            <div className="about-section-image-container">
                <img src={AboutImage} alt="Bowl of salad" />
            </div>

            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>

                <h1 className="primary-heading">
                    It Is Important To Have A Balanced Diet
                </h1>

                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>

                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>

                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>

                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>

        </section>
    )
}

export default FoodieAboutSection;