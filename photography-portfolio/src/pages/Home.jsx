import React from 'react';

export default function Home({ navigate }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-6 tracking-tight animate-fade-in-up">
        Expert Photo Editing & Production
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in delay-200" style={{ animationFillMode: 'forwards' }}>
        Welcome to my creative space. I specialize in high-end photo retouching, color grading, and visual storytelling. Turning raw moments into stunning cinematic masterpieces.
      </p>
      <button 
        onClick={() => navigate('services')} 
        className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer select-none"
      >
        View Work Gallery
      </button>
    </div>
  );
}
