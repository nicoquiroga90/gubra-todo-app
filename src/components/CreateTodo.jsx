import { useState } from "react";

export default function CreateTodo({ handleSaveTodo }) {
  const [noteText, setTodoText] = useState("");
  const characterLimit = 250;

  const handleTodoChange = (e) => {
    if (e.target.value.length > characterLimit) {
      alert(
        "🚧 You have reached the character limit 🚧 \nYou can save your note and continue in a new one 🎯"
      );
    } else {
      setTodoText(e.target.value);
    }
  };

  return (
    <div className="bg-[#67d7cc] rounded-lg p-3 shadow-lg mt-2">
      <textarea
        cols="10"
        rows="8"
        className="bg-transparent placeholder-gray-700 text-gray-800 w-full outline-none font-poppins"
        placeholder="Type your task"
        value={noteText}
        onChange={handleTodoChange}
      />
      <div className="flex gap-10 justify-between items-center font-roboto">
        <small>{characterLimit - noteText.length} remaining</small>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out ${
            noteText.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleSaveTodo(noteText)}
          disabled={noteText.trim() === ""}
        >
          Save
        </button>
      </div>
    </div>
  );
}