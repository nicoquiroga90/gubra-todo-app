import React from 'react';

export default function Todo({ text, date, done, onUpdate }) {
    const handleClick = () => {
        onUpdate(); 
    };

    const buttonClasses = `px-3 py-2 font-bold text-black rounded-full shadow-md transition-all duration-300 ease-in-out font-poppins 
        ${done ? 'bg-green-400 hover:bg-green-600 border-black' : 'bg-yellow-400 hover:bg-yellow-600 border-black'} 
        border-2`;

    return (
        <div className="bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10">
            <h5 className="note-title min-h-[130px] font-poppins break-words">
                {text}
            </h5>
            <div className="flex gap-10 justify-between items-center">
                <small className="font-roboto">{date.toLocaleDateString('en-GB')}</small>
                <button 
                    onClick={handleClick} 
                    className={buttonClasses}
                >
                    {done ? 'Completed 🎉' : 'Pending ❗'}
                </button>
            </div>
        </div>
    );
}
