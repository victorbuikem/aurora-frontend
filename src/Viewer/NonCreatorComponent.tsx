import React from 'react';

const NonCreatorComponent: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Non-Creator Info</h2>
      <p className="text-sm text-gray-600">This component is visible only to non-creators.</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default NonCreatorComponent;
