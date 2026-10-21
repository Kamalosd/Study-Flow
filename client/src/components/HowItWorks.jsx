import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">How StudyFlow Works?</h1>
        <p className="text-gray-500 mt-2">
          No complicated setup. Just 3 steps to turn your chaos into a clear study plan.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 space-y-2">
        <div className="text-center p-6 bg-white shadow rounded-xl">
          <h1 className="text-5xl font-bold text-amber-500">01</h1>
          <h2 className="text-xl font-bold mt-2">Set Your Goal</h2>
          <p className="text-gray-500">Tell us your exam or target. StudyFlow builds your perfect path.</p>
        </div>

        <div className="text-center p-6 bg-white shadow rounded-xl">
          <h1 className="text-5xl font-bold text-amber-500">02</h1>
          <h2 className="text-xl font-bold mt-2">Plan & Focus</h2>
          <p className="text-gray-500">Get daily tasks & focus timer. Just follow it, don't overthink.</p>
        </div>

        <div className="text-center p-6 bg-white shadow rounded-xl">
          <h1 className="text-5xl font-bold text-amber-500">03</h1>
          <h2 className="text-xl font-bold mt-2">Achieve Your Goal</h2>
          <p className="text-gray-500">Track streaks & progress. Finish your syllabus before time.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
