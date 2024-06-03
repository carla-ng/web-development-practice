import { CORE_CONCEPTS } from '../data/data.js'

import ReactEssentialsCoreConcept from './ReactEssentialsCoreConcept.jsx'

const ReactEssentialsCoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map(concept => <ReactEssentialsCoreConcept key={concept.title} { ...concept } />)}
            </ul>
        </section>
    )
}

export default ReactEssentialsCoreConcepts