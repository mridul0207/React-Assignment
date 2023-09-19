import React, { useState } from 'react';

const ProductModal = ({ product,isOpen,setIsOpen}) => {

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container">
            <div className="modal-content bg-white w-2/3 h-60vh p-4 rounded-lg shadow-lg flex">
              <div className="w-1/2 p-2">
                <img
                  src={product.thumbnail} // Replace with your product image source
                  alt={product.name} // Replace with product name
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-2">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-500 font-bold">${product.price}</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={()=>setIsOpen(false)}
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
)
};
export default ProductModal;
