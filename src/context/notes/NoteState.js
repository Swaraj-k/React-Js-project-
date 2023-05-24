import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // getAllNotes a Note
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2RiYzFmY2IyNThlY2YwMjRlZWI1In0sImlhdCI6MTY4MzgwNzE2OX0.rS9GCfmRUC6t5_5jIGALUA2cQXq_DHWgaE4Uq4T_Yvw",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notes.");
      }

      const json = await response.json();
         setNotes(json);
      // Logic to handle the fetched notes
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2RiYzFmY2IyNThlY2YwMjRlZWI1In0sImlhdCI6MTY4MzgwNzE2OX0.rS9GCfmRUC6t5_5jIGALUA2cQXq_DHWgaE4Uq4T_Yvw",
        },
        body: JSON.stringify({ title, description, tag }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add a note.");
      }
  
      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  
  // Delete a Note
  const deleteNote = async (id) => {
    // Todo: Api call
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2RiYzFmY2IyNThlY2YwMjRlZWI1In0sImlhdCI6MTY4MzgwNzE2OX0.rS9GCfmRUC6t5_5jIGALUA2cQXq_DHWgaE4Uq4T_Yvw",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to edit the note.");
      }

      await response.json();
    } catch (error) {
      console.error(error);
      // Handle error
    }

    console.log("deleted" + id);
    const newNote = notes.filter((note) => note._id !== id);
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2RiYzFmY2IyNThlY2YwMjRlZWI1In0sImlhdCI6MTY4MzgwNzE2OX0.rS9GCfmRUC6t5_5jIGALUA2cQXq_DHWgaE4Uq4T_Yvw",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit the note.");
      }

      await response.json();

      // Logic to update the edited note
      const updatedNotes = notes.map((note) => {
        if (note._id === id) {
          return {
            ...note,
            title,
            description,
            tag,
          };
        }
        return note;
      });

      setNotes(updatedNotes);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
