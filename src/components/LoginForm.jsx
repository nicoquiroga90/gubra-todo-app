import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setLoginVisible }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoginError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            localStorage.setItem('access_token', data.access_token);
            navigate('/todo');
        } catch (error) {
            setLoginError(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
