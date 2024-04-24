import PickMeals from "../assets/images/pick-meals-image.png";
import ChooseMeals from "../assets/images/choose-image.png";
import DeliveryMeals from "../assets/images/delivery-image.png";

const FoodieWorkSection = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
    ];

    return (
        <div className="work-section-container">

            <div className="work-section-top">
                <p className="primary-subheading">Work</p>

                <h1 className="primary-heading">How It Works</h1>

                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>

            <div className="work-section-bottom">
                { workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>

                        <div className="info-boxes-img-container">
                            <img src={data.image} alt={`${data.title} icon`} />
                        </div>

                        <h2>{data.title}</h2>

                        <p>{data.text}</p>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default FoodieWorkSection;