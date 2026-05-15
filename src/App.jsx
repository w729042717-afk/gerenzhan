import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFound from './components/NotFound/NotFound';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
