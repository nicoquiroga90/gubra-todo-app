import { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";
import Search from "../components/Search";

export default function TodoPage() {
    const [todos, setTodo] = useState([])
    const [search, setSearch] = useState("")

    const addTodo = (text) => {
        setTodo(prev => (
            [...prev, { text, date: new Date(), id: prev.length + 1 }]
        ))
    }
    return (
        <div className="flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto">
            <Search handleSearchChange={setSearch} />
            <CreateTodo handleSaveTodo={addTodo} />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {todos.length === 0 ? (
                <div className="empty-todos-wrapper">
                    You don't have any To Do yet...
                </div>) : (
                    todos
                    .filter(n => n.text.includes(search))
                    .map(n => (
                        <Todo text={n.text} date={n.date} />
                    ))
                )}
            </div>
        </div>
    )
}