import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const BlogDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Find the blog post with the matching id
  const blog = blogs.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <section id="blog-details" className="bg-lightGray py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-12">{blog.title}</h2>
        <div className="flex flex-col items-center">
          <img src={blog.image} alt={blog.title} className="w-full md:w-3/4 h-auto object-cover mb-6" />
          <p className="text-gray-700 mb-4">By {blog.author}</p>
          <p className="text-gray-600">{blog.date}</p>
          <p className="text-lg text-gray-800">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
