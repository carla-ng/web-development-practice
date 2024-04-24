import FoodieNavbar from "../components/FoodieNavbar";
import FoodieMainSection from "../components/FoodieMainSection";
import FoodieAboutSection from "../components/FoodieAboutSection";
import FoodieWorkSection from "../components/FoodieWorkSection";
import FoodieTestimonialsSection from "../components/FoodieTestimonialsSection";
import FoodieContactSection from "../components/FoodieContactSection";
import FoodieFooter from "../components/FoodieFooter";

const FoodieLandingPage = () => {

    return (
        <div id="foodie-container">

            <FoodieNavbar />

            <FoodieMainSection />
            <FoodieAboutSection />
            <FoodieWorkSection />
            <FoodieTestimonialsSection />
            <FoodieContactSection />
            
            <FoodieFooter />

        </div>
    )
}

export default FoodieLandingPage

