import star from './../assets/images/airbnb_card-star.png';

function AirbnbCard( props ) {

    let badgeText
    if ( props.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    } else if ( props.location === "Online" ) {
        badgeText = "ONLINE"
    }

    return (
        <article className="airbnb-card">
            { badgeText && <div className="card-badge">{ badgeText }</div> }

            <img
                src={`/airbnb/images/${props.coverImg}`}
                className="card-img"
                alt="Card image"
            />

            <div className="card-info">
                <img
                    src={star}
                    alt="Star image"
                />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>USA</span>
            </div>

            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </article>
    )
}

export default AirbnbCard;