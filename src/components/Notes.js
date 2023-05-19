import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <>
      <AddNote></AddNote>
      <div>
        <div className="row my-3">
          <h1>Your Note</h1>
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note}></Noteitem>;
          })}
        </div>
      </div>
    </>
  );
}
