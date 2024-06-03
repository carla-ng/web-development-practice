import '../css/ReactEssentials.css'

import ReactEssentialsCoreConcepts from '../components/ReactEssentialsCoreConcepts.jsx'
import ReactEssentialsExamples from '../components/ReactEssentialsExamples.jsx'
import ReactEssentialsHeader from '../components/ReactEssentialsHeader.jsx'

function ReactEssentialsPage() {
    return (
        <div id="reactessentials-container">
            <ReactEssentialsHeader />
            <main>
                <ReactEssentialsCoreConcepts />
                <ReactEssentialsExamples />
            </main>
        </div>
    )
}

export default ReactEssentialsPage

