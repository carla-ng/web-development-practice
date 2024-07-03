import { useState } from 'react'

import '../css/InvestmentCalculator.css'

import InvestmentCalculatorHeader from '../components/InvestmentCalculatorHeader'
import InvestmentCalculatorInput from '../components/InvestmentCalculatorInput'
import InvestmentCalculatorResults from '../components/InvestmentCalculatorResults'


const InvestmentCalculator = function() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    const inputIsValid = ( userInput.duration > 0 )

    const handleInputChange = function( inputIdentifier, newInputValue ) {
        setUserInput( prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newInputValue,
            }
        })
    }

    return (
        <div id="investment-container">

            <InvestmentCalculatorHeader />

            <InvestmentCalculatorInput
                onChangeInput={ handleInputChange }
                userInput={ userInput }
            />

            { !inputIsValid && <p>Please, enter a duration greater than zero.</p> }
            { inputIsValid && <InvestmentCalculatorResults input={ userInput } /> }

        </div>
    )
}

export default InvestmentCalculator