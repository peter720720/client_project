// import React, { useState } from 'react';

// export default function AdminDashboard({ photos, setPhotos, navigate }) {
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [imageFiles, setImageFiles] = useState([]); // Array to store multiple base64 strings

//   // Handles reading multiple files from the file explorer simultaneously
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     // Read all selected images and turn them into Base64 URLs
//     const readFilesPromises = files.map((file) => {
//       return new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.readAsDataURL(file);
//       });
//     });

//     // Wait until all files are successfully read into memory
//     Promise.all(readFilesPromises).then((base64Images) => {
//       setImageFiles(base64Images);
//     });
//   };

//   const handleUploadSubmit = (e) => {
//     e.preventDefault();
//     if (imageFiles.length === 0 || !description || !price) {
//       return alert("Please select at least one photo and fill out the description and price!");
//     }

//     // Map through all selected images and create individual product blocks for each
//     const newProducts = imageFiles.map((base64Src) => ({
//       src: base64Src,
//       description: description,
//       price: price
//     }));

//     const updatedPhotos = [...newProducts, ...photos];
    
//     // Save to App State and Browser local memory storage
//     setPhotos(updatedPhotos);
//     localStorage.setItem('photography_portfolio', JSON.stringify(updatedPhotos));
    
//     // Reset Form Fields cleanly
//     setDescription('');
//     setPrice('');
//     setImageFiles([]);
//     e.target.reset();
//   };

//   const deletePhoto = (indexToDelete) => {
//     if (window.confirm("Are you sure you want to completely remove this product?")) {
//       const updatedPhotos = photos.filter((_, index) => index !== indexToDelete);
//       setPhotos(updatedPhotos);
//       localStorage.setItem('photography_portfolio', JSON.stringify(updatedPhotos));
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
//       {/* Top Banner Control Section */}
//       <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 border-b pb-6">
//         <div>
//           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Dashboard Studio</h1>
//           <p className="text-sm text-slate-500 mt-1">Select multiple photos to batch-upload portfolio works instantly.</p>
//         </div>
//         <button 
//           onClick={() => navigate('home')} 
//           className="bg-slate-800 hover:bg-slate-950 text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-all duration-200 cursor-pointer shadow-md active:scale-95 self-start sm:self-auto"
//         >
//           Exit Panel & View Site
//         </button>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//         {/* Left Side: Bulk Upload Form Box */}
//         <div className="lg:col-span-1 bg-blue-50/60 p-6 rounded-2xl border border-blue-100 shadow-sm sticky top-24">
//           <h2 className="text-lg font-bold text-blue-800 mb-4 tracking-tight">Bulk Upload Products</h2>
//           <form onSubmit={handleUploadSubmit} className="space-y-4">
//             <div>
//               <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
//                 Select Photos ({imageFiles.length} chosen)
//               </label>
//               {/* Added 'multiple' property to allow shift-clicking or selecting many images */}
//               <input 
//                 type="file" 
//                 accept="image/*" 
//                 multiple
//                 onChange={handleFileChange}
//                 className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer cursor-pointer bg-white p-2 rounded-xl border border-slate-200 shadow-inner" 
//               />
//               {imageFiles.length > 0 && (
//                 <p className="text-xs text-green-600 font-semibold mt-1.5">
//                   ✓ Ready to upload {imageFiles.length} photos at once!
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Description / Caption</label>
//               <textarea 
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="e.g. Cinematic Retouch Collection"
//                 className="w-full border border-slate-200 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
//                 rows="3"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Price per Photo (₦)</label>
//               <input 
//                 type="number" 
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder="25000"
//                 className="w-full border border-slate-200 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 active:scale-98 cursor-pointer">
//               Publish Batch Items
//             </button>
//           </form>
//         </div>

//         {/* Right Side: Grid Display */}
//         <div className="lg:col-span-2">
//           <h2 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
//             Currently Uploaded Products ({photos.length})
//           </h2>
          
//           {photos.length === 0 ? (
//             <div className="text-center p-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
//               <p className="text-slate-400 italic font-medium">Your portfolio dashboard is empty. Use the left form to upload items!</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {photos.map((photo, index) => (
//                 <div 
//                   key={index} 
//                   className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <div className="h-48 w-full bg-slate-100 overflow-hidden">
//                     <img src={photo.src} alt="" className="w-full h-full object-cover" />
//                   </div>
                  
//                   <div className="p-5 flex flex-col justify-between flex-grow bg-gradient-to-b from-white to-slate-50/40">
//                     <div>
//                       <p className="text-sm font-semibold text-slate-700 line-clamp-2 leading-snug mb-2">
//                         {photo.description}
//                       </p>
//                       <p className="text-lg font-black text-blue-600">
//                         ₦{Number(photo.price).toLocaleString()}
//                       </p>
//                     </div>
                    
//                     <button 
//                       onClick={() => deletePhoto(index)} 
//                       className="mt-4 text-xs bg-red-50 text-red-600 font-bold hover:bg-red-100 hover:text-red-700 cursor-pointer self-end transition-all duration-200 py-2 px-4 rounded-xl border border-red-100/50 active:scale-95"
//                     >
//                       Delete Product ×
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function AdminDashboard({ photos, setPhotos, navigate }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFiles, setImageFiles] = useState([]);

  // States to handle our new custom beautiful modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemIndexToDelete, setItemIndexToDelete] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const readFilesPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readFilesPromises).then((base64Images) => {
      setImageFiles(base64Images);
    });
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (imageFiles.length === 0 || !description || !price) {
      return alert("Please select at least one photo and fill out the fields!");
    }

    const newProducts = imageFiles.map((base64Src) => ({
      src: base64Src,
      description: description,
      price: price
    }));

    const updatedPhotos = [...newProducts, ...photos];
    setPhotos(updatedPhotos);
    localStorage.setItem('photography_portfolio', JSON.stringify(updatedPhotos));
    
    setDescription('');
    setPrice('');
    setImageFiles([]);
    e.target.reset();
  };

  // Triggers our custom beautiful confirmation window instead of the raw browser prompt
  const triggerDeleteModal = (index) => {
    setItemIndexToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDeleteProduct = () => {
    if (itemIndexToDelete !== null) {
      const updatedPhotos = photos.filter((_, index) => index !== itemIndexToDelete);
      setPhotos(updatedPhotos);
      localStorage.setItem('photography_portfolio', JSON.stringify(updatedPhotos));
    }
    // Close the interface
    setIsModalOpen(false);
    setItemIndexToDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in relative">
      
      {/* ================= BEAUTIFUL CUSTOM CONFIRMATION MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full p-6 text-center transform scale-100 animate-slide-down">
            {/* Warning Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-red-100 shadow-inner select-none">
              !
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Remove Product Asset?</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              Are you sure you want to completely delete this item? This action will permanently remove it from the showcase gallery.
            </p>
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-sm transition cursor-pointer active:scale-95"
              >
                No, Keep it
              </button>
              <button
                onClick={confirmDeleteProduct}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition cursor-pointer shadow-md shadow-red-500/10 active:scale-95"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner Control Section */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 border-b pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Dashboard Studio</h1>
          <p className="text-sm text-slate-500 mt-1">Select multiple photos to batch-upload portfolio works instantly.</p>
        </div>
        <button 
          onClick={() => navigate('home')} 
          className="bg-slate-800 hover:bg-slate-950 text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-all duration-200 cursor-pointer shadow-md active:scale-95 self-start sm:self-auto"
        >
          Exit Panel & View Site
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Bulk Upload Form Box */}
        <div className="lg:col-span-1 bg-blue-50/60 p-6 rounded-2xl border border-blue-100 shadow-sm sticky top-24">
          <h2 className="text-lg font-bold text-blue-800 mb-4 tracking-tight">Bulk Upload Products</h2>
          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Select Photos ({imageFiles.length} chosen)
              </label>
              <input 
                type="file" 
                accept="image/*" 
                multiple
                onChange={handleFileChange}
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer cursor-pointer bg-white p-2 rounded-xl border border-slate-200 shadow-inner" 
              />
              {imageFiles.length > 0 && (
                <p className="text-xs text-green-600 font-semibold mt-1.5">
                  ✓ Ready to upload {imageFiles.length} photos at once!
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Description / Caption</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Cinematic Retouch Collection"
                className="w-full border border-slate-200 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Price per Photo (₦)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="25000"
                className="w-full border border-slate-200 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 active:scale-98 cursor-pointer">
              Publish Batch Items
            </button>
          </form>
        </div>

        {/* Right Side: Grid Display */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
            Currently Uploaded Products ({photos.length})
          </h2>
          
          {photos.length === 0 ? (
            <div className="text-center p-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 italic font-medium">Your portfolio dashboard is empty. Use the left form to upload items!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img src={photo.src} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-5 flex flex-col justify-between flex-grow bg-gradient-to-b from-white to-slate-50/40">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 line-clamp-2 leading-snug mb-2">
                        {photo.description}
                      </p>
                      <p className="text-lg font-black text-blue-600">
                        ₦{Number(photo.price).toLocaleString()}
                      </p>
                    </div>
                    
                    <button 
                      type="button"
                      onClick={() => triggerDeleteModal(index)} 
                      className="mt-4 text-xs bg-red-50 text-red-600 font-bold hover:bg-red-100 hover:text-red-700 cursor-pointer self-end transition-all duration-200 py-2 px-4 rounded-xl border border-red-100/50 active:scale-95"
                    >
                      Delete Product ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
