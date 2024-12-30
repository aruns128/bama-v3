import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogRenderer from "./BlogRenderer";
import { blogsData } from "./ConditionsData";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedBlog, setSelectedBlog] = useState(
    blogsData.filter((item) => item.id === +id)[0] || null
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  useEffect(() => {
    const filtered = blogsData.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const filtered = blogsData.filter((item) => item.id === +id)[0];
    setSelectedBlog(filtered);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedBlog !== null) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [selectedBlog]);

  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10 cursor-pointer">
      {/* Header Section */}
      {!selectedBlog && (
        <div className="mb-8 bg-gradient-to-r from-amber-500 to-orange-400 text-white shadow-lg p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:text-3xl text-xl font-bold flex items-center gap-2">
              Dr. Bama's Spine Care
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs by title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Blog */}
      {selectedBlog && (
        <div className="mb-10">
          <div className="flex items-center justify-end mb-4">
            {/* <h1 className="text-3xl font-bold">{selectedBlog.title}</h1> */}
            <button
              onClick={() => navigate("/blogs")}
              className="text-white bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 flex-end"
            >
              <FaArrowLeft />
            </button>
          </div>
          <BlogRenderer data={selectedBlog} />
        </div>
      )}
      {selectedBlog && (
        <div className="bg-amber-500 rounded-md flex items-center mb-10 p-1">
          <AiOutlineRead color="white" size={18} fontWeight={600} />
          <h3 className="text-lg font-semibold text-white pl-1">
            Related Articles
          </h3>
        </div>
      )}

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleBlogClick(blog)}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="relative h-40">
              <img
                src={`https://picsum.photos/id/${blog.id + 1}/400/300`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-amber-500 text-white px-3 py-1 text-sm rounded-md">
                {blog.category || "General"}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {blog.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredBlogs.length === 0 && (
        <div className="text-center mt-10">
          <img
            src="/no-results.svg"
            alt="No results"
            className="mx-auto w-40 mb-4"
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
