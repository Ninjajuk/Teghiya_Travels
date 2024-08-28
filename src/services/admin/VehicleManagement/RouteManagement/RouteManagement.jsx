import React, { useState } from "react";
import { DeleteModal } from "../../../../components/modal/DeleteModal";
import { FaPen, FaTrash } from "react-icons/fa";
import AddRoute from "../../components/FormDash/AddRoute";
function RouteManagement() {
  const [routes, setRoutes] = useState([
    // Example routes data
    {
      id: 1,
      name: "Route 1",
      start: "City A",
      end: "City B",
      distance: "100 km",
    },
    // more routes...
  ]);

  const handleEdit = (id) => {
    // Handle edit route logic
  };

  const handleDelete = (id) => {
    // Handle delete route logic
    setShowModal(true);
    setIsDeleting(true);
  };
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [addRoute, setAddRoute] = useState(false);
  const handleClose = () => {
    setAddRoute(!addRoute);
  };
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Route Management</h1>
        <button
          onClick={() => setAddRoute(!addRoute)}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Add New Route
        </button>
      </header>

      <div className="mb-4 form-group">
        <input
          type="text"
          placeholder=""
          name="Search"
          id="Search"
          className="border p-2 rounded w-full"
        />
        <label htmlFor="Search">Search routes...</label>
      </div>

      <table className="w-full table-auto bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Route Name</th>
            <th className="p-2 text-left">Start Location</th>
            <th className="p-2 text-left">End Location</th>
            <th className="p-2 text-left">Distance</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id} className="border-b">
              <td className="p-2">{route.name}</td>
              <td className="p-2">{route.start}</td>
              <td className="p-2">{route.end}</td>
              <td className="p-2">{route.distance}</td>
              <td className="p-2">
                <button
                  className=" px-2 py-1 rounded mr-2 text-green-800"
                  onClick={() => handleEdit(route.id)}
                >
                  <FaPen />
                </button>
                <button
                  className="  px-2 rounded text-red-800"
                  onClick={() => handleDelete(route.id)}
                >
                  <FaTrash className="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isDeleting && showModal && (
        <DeleteModal
          closeModal={() => setShowModal(!showModal)}
          // onDelete={onDelete}
          title={"Delete Route"}
          message={
            "Are you sure you want to Delete this Route? All associated data will be permanently removed. This action cannot be undone."
          }
          deleteText={"Delete"}
          cancelText={"Cancel"}
          toastType={"success"}
          toastMessage={"Deleted successfully!"}
        />
      )}
      {addRoute && <AddRoute handleClose={handleClose} />}
      {/* Pagination would go here */}
    </div>
  );
}

export default RouteManagement;
