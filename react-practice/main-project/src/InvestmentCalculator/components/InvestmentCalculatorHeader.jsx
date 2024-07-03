import Logo from '../assets/images/investment-calculator-logo.png'

const InvestmentCalculatorHeader = function () {
    return (
        <header id="header">
            <img src={ Logo } alt="Logo of bag with money" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default InvestmentCalculatorHeader