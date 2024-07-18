import React from 'react';

const DoctorDetails = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-green mb-2">{doctor.name}</h3>
      <h4 className="text-md font-medium text-primaryColor mb-2">{doctor.specialty}</h4>
      <p className="text-gray-600 text-center">{doctor.description}</p>
    </div>
  );
};

export default DoctorDetails;
