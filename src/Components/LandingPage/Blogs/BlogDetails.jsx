import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import blog1 from '../../../assets/images/blog1.jpeg';
import blog2 from '../../../assets/images/blog2.jpeg';
import blog3 from '../../../assets/images/blog3.jpeg';

// Mock blogs data
const blogs = [
  {
    id: 1,
    title: 'Understanding Endometriosis: Causes, Symptoms, and Treatments',
    author: 'Dr. Sarah Smith',
    date: 'June 15, 2024',
    image: blog2,
    content: 'Detailed content about understanding endometriosis...',
  },
  {
    id: 2,
    title: 'Living with Endometriosis: Tips for Managing Daily Challenges',
    author: 'Dr. John Doe',
    date: 'June 20, 2024',
    image: blog3,
    content: 'Tips for managing daily challenges with endometriosis...',
  },
  {
    id: 3,
    title: 'Living with Endometriosis: Tips for Managing Daily Challenges',
    author: 'Dr. John Doe',
    date: 'June 20, 2024',
    image: blog1,
    content: 'Additional tips for managing daily challenges with endometriosis...',
  },
];

const BlogDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Find the blog post with the matching id
  const blog = blogs.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <div className="text-center py-20 text-gray-700">Blog post not found</div>;
  }

  return (
    <section id="blog-details" className="bg-softGray py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-12 text-center">{blog.title}</h2>
        <div className="flex flex-col items-center">
          <img src={blog.image} alt={blog.title} className="w-full md:w-3/4 h-auto object-cover mb-6 rounded-lg shadow-md" />
          <p className="text-gray-700 mb-4">By <span className="font-semibold text-green">{blog.author}</span></p>
          <p className="text-gray-600 mb-6">{blog.date}</p>
          <p className="text-lg text-gray-800 leading-relaxed md:w-3/4">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
