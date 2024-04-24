import ProfilePic from "../assets/images/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const FoodieTestimonialsSection = () => {
    return (
        <div className="testimonials-section-container">
            <div className="testimonials-section-top">
                <p className="primary-subheading">Testimonials</p>

                <h1 className="primary-heading">What People Are Saying</h1>
                
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="testimonials-section-bottom">
                <img src={ProfilePic} alt="Testimonial user profile picture" />

                <p>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>

                <h2>John Doe</h2>
            </div>
        </div>
    );
};

export default FoodieTestimonialsSection;