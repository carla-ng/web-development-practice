
const ReactEssentialsTabs = ({ children, buttons, ButtonsContainer = 'menu' }) => {
    //const ButtonsContainer = buttonsContainer

    return (
        <>
            <ButtonsContainer>
                { buttons }
            </ButtonsContainer>

            { children }
        </>
    )
}

export default ReactEssentialsTabs