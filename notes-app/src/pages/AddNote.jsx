import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return alert("Fill all fields");

    addNote({ title, content });
    navigate("/notes");
  };

  return (
    <> 
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Note</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Content"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Save Note
        </button>
      </form>
    </div>
    
     </>
   
  );
};

export default AddNote;
