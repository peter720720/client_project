// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-100 border-4 border-blue-600 overflow-hidden flex-shrink-0">
          <img 
            src="https://unsplash.com" 
            alt="Admin Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Behind the Lens</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Hi, I am a professional digital artist and photographer with over 18 years of industry experience. I bring out the hidden colors, fix dynamic lighting values, and pristine clarity out of ordinary clicks.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether it is commercial product catalogs, weddings, or personal portraits, my post-production pipeline preserves authentic expressions while introducing premium high-fashion polish.
          </p>
        </div>
      </div>
    </div>
  );
}
