import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/portfolio" element={<MainLayout><PortfolioPage /></MainLayout>} />
      <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
