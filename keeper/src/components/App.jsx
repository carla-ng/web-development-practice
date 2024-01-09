import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, idx) => {
                return idx !== id;
            })
        })
    }

    return (
        <div>
            <Header />

            <CreateArea onAdd={addNote} />

            {notes.map((note, idx) =>  {
                return (<Note 
                    key={idx}
                    id={idx}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />);
            })}
                
            <Footer />
        </div>
    );
}

export default App;