
function TenziesDie( props ) {
    const styles = {
        backgroundColor: props.isFrozen ? "#80f8b0" : "#fff"
    }

    return (
        <div className="tenzies-die" style={styles} onClick={props.freezeDie}>
            <p className="tenzies-die-number">{ props.value }</p>
        </div>
    )
}

export default TenziesDie

