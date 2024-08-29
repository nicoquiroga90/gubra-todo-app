import { useState } from "react";

export default function CreateTodo({ handleSaveTodo }) {
  const [noteText, setTodoText] = useState("");
  const characterLimit = 250;

  const handleTodoChange = (e) => {
    if (e.target.value.length > characterLimit)
      alert(
        "🚧 You have reached the character limit 🚧 \nYou can save your note and continue in a new one 🎯"
      );
    else setTodoText(e.target.value);
  };

  return (
    <div className="bg-[#67d7cc] rounded-lg p-3 shadow-lg mt-2">
      <textarea
        cols="10"
        rows="8"
        className="bg-transparent placeholder-gray-700 text-gray-800 w-full outline-none font-poppins"
        placeholder="Type your note"
        value={noteText}
        onChange={handleTodoChange}
      />
      <div className="flex gap-10 justify-between items-center font-roboto">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={() => handleSaveTodo(noteText)}>
          Save
        </button>
      </div>
    </div>
  );
}
