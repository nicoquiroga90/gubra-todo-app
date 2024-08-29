import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div className="flex h-screen flex-col items-center px-8 py-16 bg-gray-100">
            <h1 className="text-5xl font-bold text-indigo-600 mb-6 text-center sm:text-4xl md:text-3xl">
                Manage your To Do List 📝
            </h1>
             <p className="text-lg text-gray-800 max-w-md text-center mb-8 
                sm:text-base md:text-lg  xl:text-2xl">
                Create, organize and save your To Do list here!
            </p>
            <Link to="/todo" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition">
                View Todo
            </Link>
        </div>
    )
}