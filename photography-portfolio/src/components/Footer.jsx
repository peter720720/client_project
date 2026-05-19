// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12 border-t-4 border-blue-600">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">ARA'FUNMI Studio</h3>
          <p className="text-blue-200 text-sm">Professional photo editing and photography services tailored to preserve your finest memories.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Visit My Studio</h3>
          <p className="text-blue-200 text-sm">123 Creative Avenue, Suite 4B<br />Downtown Media District</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Reach Me</h3>
          <p className="text-blue-200 text-sm">Email: aranbefunmi@gmail.com<br />Phone: +2348153844428</p>
        </div>
      </div>
      <div className="text-center text-xs text-blue-300 mt-8 border-t border-blue-800 pt-4">
        &copy; {new Date().getFullYear()} ARA'FUNMI STUDIOS. All rights reserved.
      </div>
    </footer>
  );
}
