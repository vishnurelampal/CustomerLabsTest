import React from "react";
import ReactDOM from "react-dom";


const SuccessModal = ({ modalDetails, closeModal }) => {
  if (!modalDetails.flag) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg font-semibold  p-6 shadow-lg 
      relative w-[250px] h-[170px] flex flex-col gap-3  justify-center items-center">
        <h1 className={`-mt-5 w-auto pt-6 ${modalDetails.status === "err"?"text-red-500":"text-gray-400"}`}>{modalDetails.msg}</h1>
        <button
          onClick={closeModal}
          className="mt-5 mb-5 p-1 w-[100px] h-[50px] bg-blue-400 text-white rounded-3xl"
        >
        Close ✕
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default SuccessModal

