import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-8">
                Page Not Found
            </p>
            <button
                onClick={handleGoBackButtonClick}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
            >
                Go Back
            </button>
        </div>
    );
}
