import React from 'react';

const FeedBackCard = ({ name, role, feedbackText, avatarImg, quotationImg }) => {
  return (
    <div className="bg-white p-8 border rounded-xl shadow-lg my-8 mx-2 flex flex-col">
      <div className="flex items-center space-x-4">
        <img src={avatarImg} alt="feedback" className="h-16 w-16 rounded-full object-cover" />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <img src={quotationImg} alt="quote" className="h-8 w-8" />
      </div>
      <div className="flex-grow py-6">
        <p className="text-lg text-gray-700 italic">{feedbackText}</p>
      </div>
    </div>
  );
}

export default FeedBackCard;
