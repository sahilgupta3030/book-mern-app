import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-ping rounded-full absolute flex items-center justify-center w-16 h-16 bg-sky-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        .
      </div>
    </div>
  );
};

export default Spinner;
