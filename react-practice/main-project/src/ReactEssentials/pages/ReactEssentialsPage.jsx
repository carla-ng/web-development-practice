import '../css/ReactEssentials.css'
import { CORE_CONCEPTS, EXAMPLES } from '../data/data.js'

import { useState } from 'react'

import ReactEssentialsHeader from '../components/ReactEssentialsHeader.jsx'
import ReactEssentialsCoreConcept from '../components/ReactEssentialsCoreConcept.jsx'
import ReactEssentialsTabButton from '../components/ReactEssentialsTabButton.jsx'

function ReactEssentialsPage() {
    const [selectedTopic, setSelectedTopic] = useState()

    const handleSelect = ( selectedButton ) => {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p> Please, select a topic.</p>

    if ( selectedTopic ) {
        tabContent = (
            <div id="tab-content">
                <h3>{ EXAMPLES[selectedTopic].title }</h3>
                <p>{ EXAMPLES[selectedTopic].description }</p>
                <code>{ EXAMPLES[selectedTopic].code }</code>
            </div>
        )
    }

    return (
        <div id="reactessentials-container">
            <ReactEssentialsHeader />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(concept => <ReactEssentialsCoreConcept key={concept.title} { ...concept } />)}
                    </ul>
                </section>
                
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</ReactEssentialsTabButton>
                    </menu>
                    
                    { tabContent }
                </section>
            </main>
        </div>
    )
}

export default ReactEssentialsPage

