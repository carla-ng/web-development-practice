import { useEffect, useState } from "react"

function MemeGenerator() {

    const [allMemes, setAllMemes] = useState([])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3i7p.jpg"
    })


    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    function getRandomMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomNumber].url
        }))
    }


    function handleChange( event ) {
        const { name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    function onSubmit( event ) {
        event.preventDefault();

        getRandomMemeImage()
    }


    return (
        <main className="memegenerator-form-container">

            <form className="memegenerator-form" onSubmit={onSubmit}>

                <div className="memegenerator-form-inputs">
                    <input
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />                    
                </div>

                <button aria-label="Generate new meme image">Get random image</button>
                
            </form>
            
            <div className="memegenerator-form-image-container">
                <img className="memegenerator-form-image" src={meme.randomImage} alt="Meme image" />
                <h2 className="memegenerator-form-toptext">{meme.topText}</h2>
                <h2 className="memegenerator-form-bottomtext">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default MemeGenerator;
