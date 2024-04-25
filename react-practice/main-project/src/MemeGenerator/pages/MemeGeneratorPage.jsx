import '../css/MemeGenerator.css'

import MemeGeneratorHeader from '../components/MemeGeneratorHeader'
import MemeGenerator from '../components/MemeGenerator'

function MemeGeneratorPage() {

    return (
        <>
            <div id="memegenerator-container">
                <MemeGeneratorHeader />
                <MemeGenerator />
            </div>
        </>
    )
}

export default MemeGeneratorPage

