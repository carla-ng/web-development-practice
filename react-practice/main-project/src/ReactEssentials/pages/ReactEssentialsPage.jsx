import '../css/ReactEssentials.css'
import { CORE_CONCEPTS } from '../data/data.js'

/*import { useState } from 'react' */

import ReactEssentialsHeader from '../components/ReactEssentialsHeader.jsx'
import ReactEssentialsCoreConcept from '../components/ReactEssentialsCoreConcept.jsx'
import ReactEssentialsTabButton from '../components/ReactEssentialsTabButton.jsx'

function ReactEssentialsPage() {
    let currentTabContent = ''

    const handleSelect = ( selectedButton ) => {
        console.log(selectedButton)
        currentTabContent = selectedButton
    }

    return (
        <div id="reactessentials-container">
            <ReactEssentialsHeader />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <ReactEssentialsCoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <ReactEssentialsCoreConcept { ...CORE_CONCEPTS[1] } />
                        <ReactEssentialsCoreConcept { ...CORE_CONCEPTS[2] } />
                        <ReactEssentialsCoreConcept { ...CORE_CONCEPTS[3] } />
                    </ul>
                </section>
                
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <ReactEssentialsTabButton onSelect={() => handleSelect('components')}>Components</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton onSelect={() => handleSelect('jsx')}>JSX</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton onSelect={() => handleSelect('props')}>Props</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton onSelect={() => handleSelect('state')}>State</ReactEssentialsTabButton>
                    </menu>
                    { currentTabContent }
                </section>
            </main>
        </div>
    )
}

export default ReactEssentialsPage

