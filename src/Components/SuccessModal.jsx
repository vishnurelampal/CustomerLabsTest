import React from "react";
import ReactDOM from "react-dom";


const SuccessModal = ({ openFlag, closeModal }) => {
  if (!openFlag) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg font-semibold text-gray-400 p-6 shadow-lg 
      relative w-[250px] h-[170px] flex flex-col gap-3  justify-center items-center">
        <h1 className="-mt-5">Success Fully Saved</h1>
        <button
          onClick={closeModal}
          className="mt-10 w-[100px] h-[50px] bg-blue-400 text-white rounded-3xl"
        >
        Close ✕
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default SuccessModal

