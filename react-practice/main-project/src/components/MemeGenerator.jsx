import { useState } from "react"
import memesData from "./../assets/data/memegenerator/memesData.js"

function MemeGenerator() {

    //const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3i7p.jpg")

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3i7p.jpg"
    })

    function getRandomMemeImage() {
        const memes = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memes[randomNumber].url
        }))
    }

    function onSubmit( event ) {
        event.preventDefault();
        console.log('Form submitted!')
        getRandomMemeImage()
    }

    return (
        <main className="memegenerator-form-container">

            <form className="memegenerator-form" onSubmit={onSubmit}>

                <div className="memegenerator-form-inputs">
                    <input
                        type="text"
                        placeholder="Top text"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                    />                    
                </div>

                <button aria-label="Generate new meme image">Create meme</button>
                
            </form>
            
            <img className="memegenerator-form-image" src={meme.randomImage} alt="Meme image" />

        </main>
    )
}

export default MemeGenerator;
