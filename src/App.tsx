import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </MainLayout>
  );
}

export default App;
