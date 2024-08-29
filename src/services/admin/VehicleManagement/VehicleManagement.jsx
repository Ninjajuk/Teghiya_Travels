import React, { useState } from "react";
import { VehicleData } from "../components/data";
import MyTable from "../../../components/common/MyTable";
import { MdFileDownload, MdFilterList, MdRefresh } from "react-icons/md";
import InputDashboard from "../components/common/InputDashboard";
import DropdownFilter from "../components/common/DropdownFilter";
import * as XLSX from "xlsx";
import PaginationComponent from "../../../components/common/Pagination";

import CardForm from "../components/FormDash/CardForm";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState(VehicleData);
  const [currentVehicle, setCurrentVehicle] = useState({
    make: "",
    model: "",
    year: "",
    seatingCapacity: "",
    features: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentVehicle({ ...currentVehicle, [e.target.name]: e.target.value });
  };

  const handleSaveVehicle = () => {
    if (editing) {
      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === currentVehicle.id ? currentVehicle : vehicle
        )
      );
      setEditing(false);
    } else {
      setVehicles([...vehicles, { ...currentVehicle, id: Date.now() }]);
    }
    setCurrentVehicle({
      make: "",
      model: "",
      year: "",
      seatingCapacity: "",
      features: "",
      image: "",
    });
  };

  const handleEditVehicle = (vehicle) => {
    setCurrentVehicle(vehicle);
    setEditing(true);
  };

  const handleDeleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const headerCol = [
    "id",
    "vehicleType",
    "title",
    "vehicleNumber",
    "model",
    "seatingCapacity",
    "driverName",
    "driverContact",
    "ownerName",
    "ownerNumber",
  ];

  // filter dropdown
  const [filter, setFilter] = useState(false);
  const handleFilterDrop = () => {
    setFilter(!filter);
  };

  // Export to Excel function
  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(vehicles); // Convert JSON data to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vehicles"); // Append the worksheet to the workbook

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "vehicles_data.xlsx");
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 250; // Total number of items in your data

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setItemsPerPage(pageSize);
    // Fetch data for the new page here
  };

  const handleItemsPerPageChange = (pageSize) => {
    setItemsPerPage(pageSize);
    // Fetch data with the new items per page here
  };

  const [showcard, setShowCard] = useState(false);
  const handleshowCard = () => {
    setShowCard(!showcard);
  };

  return (
    <div className=" w-full h-full">
      <div className="w-full h-1/6 p-4  bg-white ">
        <div className="h-full flex flex-col    ">
          <div className="h-1/2 flex justify-between  px-2 py-1 lg:py-2 ">
            <h2 className="text-sm lg:text-xl font-bold">Manage Vehicles</h2>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleshowCard}
                className="h-full flex items-center bg-primary text-white px-4 py-1 lg:py-5 rounded hover:bg-green-800"
              >
                {editing ? "Update Vehicle" : "Add Vehicle"}
              </button>
              <button
                onClick={handleshowCard}
                className="h-full flex items-center bg-green-700 text-white px-1 lg:px-4 py-1 lg:py-5 rounded hover:bg-green-800"
              >
                Import Vehicle
              </button>
            </div>
          </div>
          {/* Filters Section */}
          <div className=" h-1/2 p-2 flex gap-1 justify-between items-center my-2">
            <select
              name="vehicleType"
              // value={filters.vehicleType}
              // onChange={handleFilterChange}
              className="p-2 border rounded mx-2"
            >
              <option value="All">All Types</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
              <option value="Truck">Truck</option>
            </select>

            {/* <input
              type="text"
              name="search"
              // value={filters.search}
              // onChange={handleFilterChange}
              placeholder="Search..."
              className="p-2 border rounded "
            /> */}
            <div className="block ">
              <InputDashboard
                type="text"
                name="search"
                id="search"
                placeholder=""
                label="Search..."
              />
            </div>

            <div className=" flex gap-2  lg:gap-4 cursor-pointer ">
              <div
                onClick={handleFilterDrop}
                className=" flex items-center  hover:text-primary hover:font-bold  "
              >
                <span className="hidden lg:block">Filters</span>
                <span className="lg:pl-1">
                  <MdFilterList className="w-6 h-6 " />
                </span>
              </div>
              {filter && <DropdownFilter columns={headerCol} />}
              <div
                onClick={handleExportToExcel}
                className="flex items-center cursor-pointer hover:text-primary hover:font-bold"
              >
                <span className="hidden lg:block">Export</span>
                <span className="lg:pl-1">
                  <MdFileDownload className="w-6 h-6 " />
                </span>
              </div>
            </div>

            {/* <div className="flex items-center cursor-pointer hover:text-primary">
              <span>Refresh</span>
              <span className="pl-2">
                <MdRefresh className="w-6 h-6 text-primary" />
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="h-4/6 p-2 ">
        <MyTable headerCol={headerCol} row={VehicleData} />
      </div>
      {/* Pagination  */}
      <div className="w-full h-1/6 flex items-center ">
        <PaginationComponent
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
      {/* <VehicleManagement1 /> */}
      {showcard && <CardForm handleshowCard={handleshowCard} />}
    </div>
  );
};

export default VehicleManagement;
