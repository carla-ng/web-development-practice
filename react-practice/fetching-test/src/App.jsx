import { useEffect, useState } from "react";
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }, []);


    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
            .then(response => response.json())
            .then(data => {
                const { _id } = data
                const url = `/cat/${_id}/says/${firstWord}`
                
                const imageUrl = `${CAT_PREFIX_IMAGE_URL}${url}`
                setImageUrl(imageUrl)
            })
    }, [fact]);


    return (
        <main>
            <h1>Cats App</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word from ${fact}`} />}
        </main>
    )
}