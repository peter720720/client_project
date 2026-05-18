import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'admin' ? 'admin' : 'home';
  });
  
  const [photos, setPhotos] = useState([]);

  // Load photos from localStorage on initialization
  useEffect(() => {
    const savedPhotos = localStorage.getItem('photography_portfolio');
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    }

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get('view') === 'admin' ? 'admin' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Safe navigation function that updates pages dynamically WITHOUT hard-reloading the browser
  const handlePageNavigation = (pageName) => {
    setCurrentPage(pageName);
    if (pageName === 'admin') {
      window.history.pushState({}, '', '?view=admin');
    } else {
      window.history.pushState({}, '', window.location.pathname);
    }
    
    // Force state synchronization directly from local browser storage cache
    const savedPhotos = localStorage.getItem('photography_portfolio');
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <div className="animate-fade-in"><Home navigate={handlePageNavigation} /></div>;
      case 'services': return <div className="animate-fade-in"><Services photos={photos} /></div>;
      case 'about': return <div className="animate-fade-in"><About /></div>;
      case 'contact': return <div className="animate-fade-in"><Contact /></div>;
      case 'admin': return <div className="animate-fade-in"><AdminDashboard photos={photos} setPhotos={setPhotos} navigate={handlePageNavigation} /></div>;
      default: return <Home navigate={handlePageNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-800">
      <Navbar setCurrentPage={handlePageNavigation} currentPage={currentPage} />
      <main className="flex-grow pt-20">{renderPage()}</main>
      <Footer />
    </div>
  );
}
