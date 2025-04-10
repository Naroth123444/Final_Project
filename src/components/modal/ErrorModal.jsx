import React from "react";

const ErrorModal = ({ title, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-gray-500 opacity-75"
        aria-hidden="true"
        onClick={onClose} // Click outside to close
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl sm:max-w-lg sm:w-full sm:p-6 relative">
        <div className="flex flex-col items-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-2">{description}</p>

          {/* Close Button */}
          <button
            className="mt-5 w-full rounded-md px-4 py-2 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
