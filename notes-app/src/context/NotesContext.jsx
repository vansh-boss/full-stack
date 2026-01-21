import { createContext, useContext, useState, useEffect } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // 🔁 refresh pe notes wapas lao
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // 💾 save on change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
  setNotes((prev) => prev.filter((n) => n.id !== id));
};

  const editNote = (id, updatedNote) => {
  setNotes((prev) =>
    prev.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    )
  );

  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
