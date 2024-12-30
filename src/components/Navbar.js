import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from React Icons
import { ConditionsData, blogsData } from "./ConditionsData";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const handleCardClick = (blog) => {
    navigate(`/blogs/${blog.id}`);
    setOpenDropdown(null);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Why Us",
      subItems: [
        { label: "Dr.Bama Spine Approach" },
        { label: "Digital Spine Analysis" },
        { label: "Isolation Treatment" },
        { label: "Recurrence Management" },
      ],
    },
    {
      label: "Conditions We Treat",
      subItems: [...ConditionsData],
    },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blogs" },
    { label: "Locate Us", path: "/locations" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100 shadow-md z-[999]">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/company-logo.jpg"
            alt="Dr.Bama Spine Care"
            className="h-8 w-auto md:h-8 lg:h-12"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-amber-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-6 font-bold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              ref={(el) => (dropdownRefs.current[index] = el)}
            >
              {item.subItems ? (
                <>
                  <button
                    className="text-gray-700 hover:text-amber-600"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                  </button>
                  {openDropdown === index && (
                    <div
                      className={`absolute left-0 mt-2 bg-white border rounded-lg shadow-lg z-[999]
                      ${
                        item.subItems.length > 6
                          ? "lg:grid lg:grid-cols-3 lg:gap-1 lg:w-[720px] lg:-left-[320px]"
                          : "min-w-56"
                      }`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="block px-2 py-1 text-sm text-gray-700 hover:text-amber-300 font-semibold cursor-pointer"
                          onClick={() =>
                            handleCardClick(
                              blogsData.filter(
                                (blog) => subItem.id === blog.id
                              )[0]
                            )
                          }
                        >
                          {subItem.label}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-amber-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg w-full absolute top-14 left-0">
            <ul className="flex flex-col space-y-4 p-4 font-bold">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  ref={(el) => (dropdownRefs.current[index] = el)}
                >
                  {item.subItems ? (
                    <>
                      <button
                        className="text-gray-700 hover:text-amber-600 w-full text-left"
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.label}
                      </button>
                      {openDropdown === index && (
                        <div className="pl-4 mt-2 max-h-56 overflow-y-auto">
                          {item.subItems.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="block px-2 py-1 text-sm text-gray-700 hover:text-amber-300 font-semibold cursor-pointer"
                              onClick={() =>
                                handleCardClick(
                                  blogsData.filter(
                                    (blog) => subItem.id === blog.id
                                  )[0]
                                )
                              }
                            >
                              {subItem.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-amber-600"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
