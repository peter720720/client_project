// src/pages/Contact.jsx
import React from 'react';
import WhatsAppBubble from '../components/WhatsAppBubble';

export default function Contact() {
  const networks = [
    { name: 'WhatsApp', value: '+2348153844428', color: 'bg-green-100 text-green-700' },
    { name: 'Email Address', value: 'aranbefunmi@gmail.com', color: 'bg-blue-100 text-blue-700' },
    { name: 'Instagram', value: '@LensMaster_Edits', color: 'bg-purple-100 text-purple-700' },
    { name: 'Phone Support', value: '+2348153844428', color: 'bg-slate-100 text-slate-700' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Get In Touch</h2>
        <p className="text-slate-600">Need creative retouching or looking to hire me for a session? Reach out directly through any platform below.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {networks.map((net, i) => (
          <div key={i} className={`p-5 rounded-xl border ${net.color} flex flex-col justify-center`}>
            <span className="text-xs uppercase font-bold tracking-wider opacity-75">{net.name}</span>
            <span className="text-lg font-semibold mt-1 break-all">{net.value}</span>
          </div>
        ))}
      </div>
      <WhatsAppBubble />
    </div>
  );
}
