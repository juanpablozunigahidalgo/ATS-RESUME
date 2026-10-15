import React from 'react';

const A4PageWrapper = ({children}) => {
  return (
    <div className="w-8.5in bg-white text-gray-900">
      {children}
    </div>
  );
};

export default A4PageWrapper;
