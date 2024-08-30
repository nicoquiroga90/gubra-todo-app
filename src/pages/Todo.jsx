import { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodoDone } from "../components/Api";
import CreateTodo from "../components/CreateTodo";
import Status from "../components/Status";
import Search from "../components/Search";

export default function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const data = await getTodos();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        loadTodos();
    }, []);

    const addTodo = async (text) => {
        const newTodo = {
            content: text,
            due: new Date().toISOString(),
            done: false,
        };

        try {
            const addedTodo = await createTodo(newTodo);
            setTodos(prev => [...prev, addedTodo]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleToggleDone = async (id, currentDoneStatus) => {
        const newDoneStatus = !currentDoneStatus;
        try {
            const updatedTodo = await updateTodoDone(id, newDoneStatus);
            setTodos(prev => prev.map(todo => (todo.id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error('Error toggling done status:', error);
        }
    };

    return (
        <div className="flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto">
            <Search handleSearchChange={setSearch} />
            <CreateTodo handleSaveTodo={addTodo} />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {todos.length === 0 ? (
                    <div className="empty-todos-wrapper">
                        You don't have any To-Do yet...
                    </div>
                ) : (
                    todos
                        .filter(todo => todo.content.includes(search))
                        .map(todo => (
                            <Status
                                key={todo.id}
                                text={todo.content}
                                date={new Date(todo.due)}
                                done={todo.done}
                                onUpdate={() => handleToggleDone(todo.id, todo.done)}
                            />
                        ))
                )}
            </div>
        </div>
    );
}
