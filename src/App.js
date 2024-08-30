import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('access_token');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={isAuthenticated ? <Todo /> : <Navigate to="/todo" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
