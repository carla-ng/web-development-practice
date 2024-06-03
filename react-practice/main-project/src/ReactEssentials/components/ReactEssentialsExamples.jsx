import { useState } from 'react'

import { EXAMPLES } from '../data/data.js'

import ReactEssentialsTabButton from './ReactEssentialsTabButton.jsx'
import ReactEssentialsTabs from './ReactEssentialsTabs.jsx'
import ReactEssentialsSection from './ReactEssentialsSection.jsx'

const ReactEssentialsExample = () => {
    const [selectedTopic, setSelectedTopic] = useState()

    const handleSelect = ( selectedButton ) => {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p> Please, select a topic / tab.</p>

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
        <ReactEssentialsSection id="examples" title="Examples">
            <ReactEssentialsTabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</ReactEssentialsTabButton>
                        <ReactEssentialsTabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</ReactEssentialsTabButton>
                    </>}
            >
                { tabContent }
            </ReactEssentialsTabs>
        </ReactEssentialsSection>
    )
}

export default ReactEssentialsExample