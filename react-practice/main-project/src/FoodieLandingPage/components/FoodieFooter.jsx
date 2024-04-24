import Logo from "../assets/images/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FoodieFooter = () => {

    return (
        <footer className="footer">

            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Footer logo" />
                </div>

                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>

            <div className="footer-section-two">
                <ul className="footer-section-columns">
                    <li>Qualtiy</li>
                    <li>Help</li>
                    <li>Share</li>
                    <li>Carrers</li>
                    <li>Testimonials</li>
                    <li>Work</li>
                </ul>

                <ul className="footer-section-columns">
                    <li>244-5333-7783</li>
                    <li>hello@food.com</li>
                    <li>press@food.com</li>
                    <li>contact@food.com</li>
                </ul>

                <ul className="footer-section-columns">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

        </footer>
    );
};

export default FoodieFooter;