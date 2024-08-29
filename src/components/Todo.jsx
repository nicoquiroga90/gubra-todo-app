export default function Todo({ text, date, done, onUpdate }) {
    const handleClick = () => {
        onUpdate(!done); 
    };

    return (
        <div className="bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10">
            <h5 className="note-title min-h-[130px] font-poppins break-words">
                {text}
            </h5>
            <div className="flex gap-10 justify-between items-center">
                <small className="font-roboto">{date.toLocaleDateString('en-GB')}</small>
                <button 
                    onClick={handleClick} 
                    className="text-blue-500 hover:underline"
                >
                    {done ? 'Completed ✅' : 'Pending ⚠️'}
                </button>
            </div>
        </div>
    );
}
