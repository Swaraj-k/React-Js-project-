import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export default function Notes() {
    const context = useContext(NoteContext);
    const { notes, seNotes } = context;
  return (
    <div>
      <div className="row my-3">
        <h1>Your Note</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note}></Noteitem>
        })}
      </div>
    </div>
  );
}
