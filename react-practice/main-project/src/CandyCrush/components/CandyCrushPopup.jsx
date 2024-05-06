
const CandyCrushPopup = ({ isOpen }) => {
    if ( !isOpen ) return null

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Sorry, Device Not Supported</h2>
                <p>Please, open on non-touch device with at least 769px of width</p>
            </div>
        </div>
    )
}

export default CandyCrushPopup