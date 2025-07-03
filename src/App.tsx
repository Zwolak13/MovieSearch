import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage.tsx';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
