import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645dee286007e85738a42786",
      user: "645cdbc1fcb258ecf024eeb5",
      title: "My Ttle",
      description: "please wake up early",
      tag: "Presonal",
      date: "2023-05-12T07:43:36.316Z",
      __v: 0,
    },
    {
      _id: "645e25fd1a49f8f1ad9f4e9e",
      user: "645cdbc1fcb258ecf024eeb5",
      title: "New Note",
      description: "This is new Note",
      tag: "Presonal",
      date: "2023-05-12T11:41:49.595Z",
      __v: 0,
    },
    {
      _id: "645f2d70b0945d36adeebd6d",
      user: "645cdbc1fcb258ecf024eeb5",
      title: "New Nte",
      description: "This is new Note",
      tag: "Presonal",
      date: "2023-05-13T06:25:52.209Z",
      __v: 0,
    },
    {
      _id: "645f2e5fb0945d36adeebd7a",
      user: "645cdbc1fcb258ecf024eeb5",
      title: "New Note 9",
      description: "This is new Note",
      tag: "Presonal",
      date: "2023-05-13T06:29:51.533Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote =(title, description, tag)=>{

    //Todo Api call
   const note =   {
      _id: "645f2e5fb0945d36adeebd7a",
      user: "645cdbc1fcb258ecf024eeb5",
      title: title,
      description: description,
      tag: tag,
      date: "2023-05-13T06:29:51.533Z",
      __v: 0,
    };
    setNotes(notes.concat(note))
  }
  //Delete a Note
  const deleteNote =()=>{
    
  }
  //Edit a Note
  const editNote =()=>{
    
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote ,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
