import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const state = {
    name: "Harry",
    class: "5b",
  };
  //eslint-disable-next-line
  const [State, setState] = useState();

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Larry",
        class: "10b",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
