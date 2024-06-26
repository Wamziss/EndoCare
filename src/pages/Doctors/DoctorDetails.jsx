import React from 'react';

const DoctorDetails = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
      <h3 className="text-xl font-semibold text-primaryColor mb-2">{doctor.name}</h3>
      <p className="text-gray-700 mb-4">{doctor.specialty}</p>
      <p className="text-gray-600">{doctor.description}</p>
    </div>
  );
};

export default DoctorDetails;
