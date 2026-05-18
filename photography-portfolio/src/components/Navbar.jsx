import React, { useState } from 'react';

export default function Navbar({ setCurrentPage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['home', 'services', 'about', 'contact'];

  return (
    <nav className="bg-blue-600 text-white fixed top-0 w-full z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand identity anchor with cursor point */}
        <div 
          className="text-xl font-bold tracking-wide cursor-pointer active:scale-95 transition-transform duration-150 select-none" 
          onClick={() => setCurrentPage('home')}
        >
          ARA'FUNMI  <span className="text-blue-200">STUDIOS</span>
        </div>
        
        {/* Desktop links equipped with interaction states */}
        <div className="hidden md:flex space-x-6 capitalize">
          {links.map(link => (
            <button 
              key={link} 
              onClick={() => setCurrentPage(link)}
              className={`relative py-1 px-2 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer rounded hover:bg-blue-700/50 active:scale-95 ${
                currentPage === link ? 'text-white' : 'text-blue-100 hover:text-white'
              }`}
            >
              {link}
              {currentPage === link && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-scale-x" />
              )}
            </button>
          ))}
        </div>
        
        {/* Hamburger layout controller */}
        <button 
          className="md:hidden text-2xl cursor-pointer p-1 active:scale-90 transition-transform duration-150" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer wrapper */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500/30 flex flex-col p-4 space-y-2 capitalize animate-slide-down">
          {links.map(link => (
            <button 
              key={link} 
              onClick={() => { setCurrentPage(link); setIsOpen(false); }} 
              className={`text-left py-2 px-3 rounded transition-all duration-200 cursor-pointer active:bg-blue-800 ${
                currentPage === link ? 'bg-blue-800 font-semibold' : 'hover:bg-blue-600/50'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
