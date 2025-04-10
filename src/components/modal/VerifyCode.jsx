import React, { useState } from "react";

export default function VerifyCode({ onClick }) {
  const [code, setCode] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const handleClick = () => {
    const inputCode = document.getElementById("code");
    if (inputCode) {
      setCode(inputCode.value);
      if (onClick) {
        onClick(inputCode.value); // Pass the code to the parent component
      }
    }
    setShowModal(false);
    return code;
  };
  return (
    <div
      id="container"
      className={`fixed z-200 inset-0 overflow-y-auto ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom w-fit bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex items-center justify-center">
            <div className="mt-3 text-center flex flex-col items-center gap-2 sm:mt-0 sm:ml-4 ">
              <article>
                <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
                  Input Verify Code
                </h3>
                <div className="mt-2">
                  <input
                    className="h-[52px] w-full text-center rounded-small shadow-small outline-1 outline-accent"
                    type="text"
                    name="code"
                    id="code"
                    placeholder="CODE"
                  />
                </div>
              </article>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex justify-center items-center">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 medium-button"
                onClick={handleClick}
              >
                Accept
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
