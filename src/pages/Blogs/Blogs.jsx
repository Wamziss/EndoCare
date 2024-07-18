import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/images/blog1.jpeg';
import blog2 from '../../assets/images/blog2.jpeg';
import blog3 from '../../assets/images/blog3.jpeg';

const blogs = [
  {
    id: 1,
    title: 'Understanding Endometriosis: Causes, Symptoms, and Treatments',
    author: 'Dr. Sarah Smith',
    date: 'June 15, 2024',
    image: blog2,
  },
  {
    id: 2,
    title: 'Living with Endometriosis: Tips for Managing Daily Challenges',
    author: 'Dr. John Doe',
    date: 'June 20, 2024',
    image: blog3,
  },
  {
    id: 3,
    title: 'Living with Endometriosis: Tips for Managing Daily Challenges',
    author: 'Dr. John Doe',
    date: 'June 20, 2024',
    image: blog1,
  },
];

const Blogs = () => {
  return (
    <section id="blog" className="bg-lightYellow py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-12">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-4" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-2">By {blog.author}</p>
                <p className="text-gray-600">{blog.date}</p>
                <Link to={`/blog/${blog.id}`} className="block mt-4 text-primaryColor hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

