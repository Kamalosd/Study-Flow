import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Studying = () => {
  return (
    <div className="container mx-auto text-center mt-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Studying, But Smarter — Not Longer</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          You don't need 10 hours of distracted reading. You need 2 hours of deep, focused learning. StudyFlow breaks your syllabus into clear goals, tracks your daily progress, and keeps you in flow — so every session actually counts.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="space-y-2 mt-8 p-4 bg-amber-100 rounded-xl">
          <FaFacebook className="mx-auto" />
          <h1 className="text-2xl font-bold">Focus Mode</h1>
          <h2 className="text-gray-600">No distractions. Just you & your goal.</h2>
        </div>
        <div className="space-y-2 mt-8 p-4 bg-amber-100 rounded-xl">
          <FaFacebook className="mx-auto" />
          <h1 className="text-2xl font-bold">Track Progress</h1>
          <h2 className="text-gray-600">See exactly how far you've come.</h2>
        </div>
        <div className="space-y-2 mt-8 p-4 bg-amber-100 rounded-xl">
          <FaFacebook className="mx-auto" />
          <h1 className="text-2xl font-bold">Stay Consistent</h1>
          <h2 className="text-gray-600">Small wins, every single day.</h2>
        </div>
      </div>
    </div>
  );
};

export default Studying;
