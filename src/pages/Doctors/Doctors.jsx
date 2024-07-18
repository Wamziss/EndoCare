import React from 'react';
import DoctorDetails from './DoctorDetails';
import doc1 from '../../assets/images/doc1.jpg';
import doc2 from '../../assets/images/doc2.jpg';
import doc3 from '../../assets/images/doc3.jpg';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Smith',
    specialty: 'Gynecologist',
    description: 'Specializes in endometriosis diagnosis and treatment.',
    image: doc1,
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialty: 'Endocrinologist',
    description: 'Expert in hormonal treatments for endometriosis patients.',
    image: doc2,
  },
  {
    id: 3,
    name: 'Dr. Emily Williams',
    specialty: 'Pain Management Specialist',
    description: 'Focuses on managing pain associated with endometriosis.',
    image: doc3,
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="bg-softGray py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-12">Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map(doctor => (
            <DoctorDetails key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;


