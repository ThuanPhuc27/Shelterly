import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart, FiShare2, FiX } from 'react-icons/fi';
import Rating from '../components/Rating';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;
  const [showZoom, setShowZoom] = useState(false);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#208486] text-white px-6 py-2 rounded-lg hover:bg-[#186b6b] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    if (product.shopeeLink) {
      window.open(product.shopeeLink, '_blank');
    } else {
      alert('Shopee link not available.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: 'Check out this product!',
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 relative">
      {/* Zoom Modal */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setShowZoom(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={product.linkImg}
              alt={product.title}
              className="w-full object-contain max-h-[80vh] rounded-lg"
            />
            <button
              onClick={() => setShowZoom(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#208486] mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center">
            <div className="h-96 flex items-center justify-center cursor-zoom-in">
              <img
                src={product.linkImg}
                alt={product.title}
                onClick={() => setShowZoom(true)}
                className="w-full h-full max-h-96 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Click to zoom</p>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              {product.isNew && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-4">{product.category}</p>

            <div className="flex items-center mb-4">
              <Rating rating={product.rating} />
              <span className="text-gray-500 text-sm ml-2">({product.reviews || 0} reviews)</span>
            </div>

            <p className="text-2xl font-bold text-[#208486] mb-6">{product.price}</p>

            <p className="text-gray-700 mb-8">
              {product.description || 'No description available.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#20B486] hover:bg-[#189e72] text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <FiShoppingCart />
                Buy on Shopee
              </button>
              <button
                onClick={handleShare}
                className="flex-1 border border-[#20B486] text-[#20B486] hover:bg-[#f0fdfa] py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <FiShare2 />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
