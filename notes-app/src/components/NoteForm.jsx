import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    addNote({
      id: Date.now(),
      title,
      content,
    });

    setTitle("");
    setContent("");
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow bg-white"
    >
      <h2 className="font-bold mb-2">Add New Note</h2>

      <input
        className="w-full border p-2 mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Note
      </button>
    </form>
    
  );
};

export default NoteForm;
