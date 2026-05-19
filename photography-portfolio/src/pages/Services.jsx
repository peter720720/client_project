import React from 'react';
import WhatsAppBubble from '../components/WhatsAppBubble';

export default function Services({ photos }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center border-b pb-4 tracking-tight">My Recent Works</h2>
      
      {photos.length === 0 ? (
        <div className="text-center py-20 bg-blue-50/50 rounded-2xl border-2 border-dashed border-blue-200">
          <p className="text-2xl font-semibold text-blue-500">Coming Soon</p>
          <p className="text-slate-500 mt-2">The administrator is currently preparing and uploading beautiful edits!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-slate-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              <div className="overflow-hidden relative h-64 bg-slate-100">
                <img 
                  src={item.src} 
                  alt={item.description} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/30">
                <p className="text-slate-700 font-medium mb-4 line-clamp-3 leading-snug">{item.description}</p>
                <div className="text-2xl font-black text-blue-600 select-none">₦{Number(item.price).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Rendering our updated fix component directly onto the page layout view */}
      <WhatsAppBubble />
    </div>
  );
}
