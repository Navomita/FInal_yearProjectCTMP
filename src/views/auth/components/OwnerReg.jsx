import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import AddCar from './AddCarSection';
import { resetOwnerState } from '../../../store/owner/ownerSlice';
import VehicleDetails from './VehicleDetails';
import { createOwnerProfile } from '../../../store/owner/ownerConroller';

function OwnerReg({ id }) {
  const dispatch = useDispatch();
  const { error, message, loading, status } = useSelector((state) => state.owner);
  console.log("-------",id);
  

  // Form States
 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState([]); // Array of vehicle objects
  const [isOpen, setIsOpen] = useState(false);



  // Add a vehicle
  const handleVehicleChange = (vehicle) => {
    console.log(vehicle);
    
    const { name, modelNumber, _id } = vehicle;
    // const newVehicle = { vehicle }; // Only store the vehicle ID in the array
    setVehicleDetails((prev) => [...prev, vehicle]);
  };

  // Remove a vehicle
  const handleRemoveVehicle = (id) => {
    console.log(id);

    const tempArr = vehicleDetails.filter((ele) => ele.vehicle !== id);
    setVehicleDetails(tempArr);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user: id ,
      contactInfo: {
        email,
        phone,
        address,
      },
      vehicles: vehicleDetails.map((vehicle) => ({
        vehicle: vehicle._id, // Only reference the vehicle ID
      })),
    };

    // console.log(formData);
    

    dispatch(createOwnerProfile(formData)); // Uncomment when ready
    console.log('Form Data Submitted:', formData);
  };

  // Handle success/error toast notifications
  useEffect(() => {
    if (status?.createOwnerProfile === 'success') {
      toast.success(message);
    } else if (status?.createOwnerProfile === 'rejected') {
      toast.error(error);
    }

    return () => {
      dispatch(resetOwnerState());
    };
  }, [status, message, error, dispatch]);

  return (
    <div className="owner-reg-container">
      <h2 className="form-title text-xl">Register as Owner</h2>
      <form onSubmit={handleSubmit} className="owner-reg-form">
       
        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Email"
        />

        {/* Phone */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Phone Number"
        />

        {/* Address */}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="custom-input my-2"
          placeholder="Address"
        />

        {/* Vehicle Information */}
        <label className="block font-medium my-2">Vehicle Information</label>
        <div className="flex flex-wrap gap-3">
          {vehicleDetails.length > 0 &&
            vehicleDetails.map((vehicle, index) => (
              <VehicleDetails vehicle={vehicle} key={vehicle.vehicle} onRemove={handleRemoveVehicle} />
            ))}
        </div>

        {/* Add Vehicle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="submit-btn my-2"
        >
          Add Another Vehicle
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading?.createOwnerProfileLoading}
          className="submit-btn py-2 px-4 rounded-md"
        >
          {loading?.createOwnerProfileLoading ? 'Registering...' : 'Register as Owner'}
        </button>
      </form>

      {/* Popup for Vehicle Details */}
      {isOpen && (
        <div className="popup-container">
          <div className="flex flex-col gap-4 bg-white rounded-md shadow-sm p-6 pt-4 max-w-[500px] overflow-auto h-[90vh]">
            <div onClick={() => setIsOpen(false)} className="self-end cursor-pointer">
              ❌
            </div>
            <AddCar onDetails={handleVehicleChange} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerReg;
