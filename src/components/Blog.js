import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogRenderer from "./BlogRenderer";
import { blogsData } from "./ConditionsData";

const Blog = () => {
  // Get the selected blog from location state
  const location = useLocation();
  const [selectedBlog, setSelectedBlog] = useState(
    location.state?.selectedBlog || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  // Filter blogs based on the search query
  useEffect(() => {
    const filtered = blogsData.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchQuery]);

  // Scroll to the top when the page is loaded or reloaded
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  useEffect(() => {
    if (selectedBlog !== null) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to the top
      });
    }
  }, [selectedBlog]);

  // Handle click on a blog card
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10 cursor-pointer">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="text-2xl font-semibold text-gray-800 mb-4 lg:mb-0">
          Dr. Bama's Spine Care
        </div>
        <div className="w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search blogs by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Display selected blog */}
      {selectedBlog && (
        <div className="mb-10">
          <BlogRenderer data={selectedBlog} />
        </div>
      )}

      {/* Blog Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleBlogClick(blog)}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            {/* Blog Image */}
            <div className="relative h-30 sm:h-46 md:h-54">
              <img
                src={`https://picsum.photos/id/${blog.id + 1}/400/300`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              {/* Blog Title Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent">
                <h2 className="text-sm sm:text-base font-bold text-white p-4 hover:text-amber-400">
                  {blog.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredBlogs.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No blogs found matching your search.
        </div>
      )}
    </div>
  );
};

export default Blog;
