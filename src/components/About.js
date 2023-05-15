import React, { useEffect, useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

export default function About() {
  const a = useContext(NoteContext);

  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      This is About {a.state.name} and he is in the class {a.state.class}
    </div>
  );
}
