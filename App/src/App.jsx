import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home'

function usePageTitle() {
  const location = useLocation ();

  useEffect (() => {
    const path = location.pathname;

    const titles = {
      '/': 'Inicio',
      '/Products': 'Productos',
    };
  
  document.title = titles[path] || 'Mi proyecto';
 }, [location]);
}

function AppRoutes() {
  usePageTitle();
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default function App(){
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
