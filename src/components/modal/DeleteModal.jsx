import { AiFillExclamationCircle } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const DeleteModal = ({
  closeModal,
  onDelete,
  title = "Deactivate Product",
  message = "Are you sure you want to deactivate this product? All associated data will be permanently removed. This action cannot be undone.",
  deleteText = "Delete",
  cancelText = "Cancel",
  toastType = "success",
  toastMessage = "Deleted successfully!",
}) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(); // Call the onDelete function when "Delete" is clicked
    }
    showToast(toastType, toastMessage); // Show a dynamic toast notification
    closeModal(); // Close the modal
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
        <div className="relative z-10 bg-white p-4 max-w-md rounded-lg">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <FaExclamationTriangle
              className="h-6 w-6 text-red-600 text-center"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h1>
          <p className="text-sm text-gray-500">{message}</p>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={handleDelete}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              {deleteText}
            </button>
            <button
              onClick={closeModal}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              {cancelText}
            </button>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

// Function to show toast notifications
const showToast = (type, message) => {
  // Logic to show toast based on type (success, error, warning, etc.)
  // Example using react-toastify:
  // toast[type](message);
};
