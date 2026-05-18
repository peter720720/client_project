import React from 'react';

export default function WhatsAppBubble() {
  // Enter the admin's real phone number directly here
  const whatsappNumber = "2348164253731"; 
  const message = encodeURIComponent("Hello! I saw your portfolio and I would like to book a photo editing service.");

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center cursor-pointer select-none group"
      title="Chat on WhatsApp"
    >
      <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
        Open WhatsApp Chat
      </span>
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.141 1.233 8.379 3.473 2.238 2.24 3.467 5.218 3.465 8.385-.004 6.581-5.34 11.93-11.874 11.93-2.007-.001-3.98-.51-5.731-1.482L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.405 0 9.801-4.322 9.804-9.63.001-2.571-1.002-4.987-2.825-6.81C16.528 2.338 14.12 1.332 11.56 1.33 6.154 1.33 1.76 5.651 1.757 10.958c-.001 1.674.452 3.307 1.311 4.743L2.046 21.1l5.601-1.468z"/>
      </svg>
    </a>
  );
}
