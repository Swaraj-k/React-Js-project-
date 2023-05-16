import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const state = {
    name: "Harry",
    class: "5b",
  };
  //eslint-disable-next-line
  const [State, setState] = useState();


  return (
    <NoteContext.Provider>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
