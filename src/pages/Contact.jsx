import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration purposes
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact-us" className="bg-softGray py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primaryColor mb-8">Contact Us</h2>
        <p className="text-md text-gray-700 mb-4 md:mb-6">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out.
        </p>
        <div className="md:flex md:justify-around">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-0 md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-green font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-green font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-green font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor resize-vertical"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green text-white py-2 px-4 rounded-md hover:bg-primaryColor transition duration-200"
            >
              Submit
            </button>
          </form>
          <div className="md:w-1/2 lg:w-1/3 md:flex md:flex-col md:justify-center md:pl-4">
            <div className="text-left mb-6">
              <h3 className="text-xl font-semibold text-primaryColor mb-2">Contact Information</h3>
              <p className="text-gray-700">Email: support@endocare.com</p>
              <p className="text-gray-700">Phone: +1 123 456 7890</p>
              <p className="text-gray-700">Address: 123 Health St, Wellness City, CA</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primaryColor mb-2">Find Us Here</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197986536794!2d-122.41941548468133!3d37.77492917975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b93e6d2cb%3A0x25f4d7c0f7e8972a!2s123%20Health%20St%2C%20Wellness%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1624031619824!5m2!1sen!2sus"
                width="100%"
                height="150"
                allowFullScreen=""
                loading="lazy"
                className="rounded-md shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


