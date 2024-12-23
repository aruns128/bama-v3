import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCogs,
  FaFlask,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GoogleReviews from "./GoogleReview";
import { ConditionsData as conditions, blogsData } from "./ConditionsData";
import SEO from "./SEO";
const Home = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC"
  );

  const displayedConditions = showAll ? conditions : conditions.slice(0, 16);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Custom arrows instead of default ones
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Patient data (avatars and corresponding video URLs)
  const patients = [
    {
      name: "Patient 1",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Dummy avatar 1
      videoUrl: "https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC", // Example YouTube URL
    },
    {
      name: "Patient 2",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg", // Dummy avatar 2
      videoUrl: "https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC", // Example YouTube URL
    },
    {
      name: "Patient 3",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg", // Dummy avatar 3
      videoUrl: "https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC", // Example YouTube URL
    },
    {
      name: "Patient 4",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg", // Dummy avatar 4
      videoUrl: "https://www.youtube.com/embed/QV0JqnKRxIc?si=iS4zj9YWm-9W9pmC", // Example YouTube URL
    },
  ];

  const handleCardClick = (blog) => {
    navigate("/blogs", { state: { selectedBlog: blog } });
  };

  return (
    <div>
      {/* Section 1: Image Slider */}
      <section className="bg-gray-100 py-6 z-1 mt-24 relative">
        <SEO
          title="Dr. Bama Spine Care - Trusted Spine Treatment"
          description="Dr. Bama Spine Care offers effective spine care treatments in Ernakulam, specializing in back pain and spine disorders."
          keywords="spine care, back pain treatment, Dr. Bama, spine clinic, spine disorders"
          canonical="https://www.drbamaspinecare.com"
        />
        <SEO
          title="Dr. Bama Spine Care - Trusted Spine Treatment"
          description="With over 32 years of experience in spine care treatment, we at Bama
            Spine Care are dedicated to providing effective and personalized
            solutions for a wide range of spinal and musculoskeletal conditions.
            Our expertise lies in merging the ancient wisdom of Ayurveda with
            the latest advancements in modern medical technology, ensuring that
            our patients receive the highest standard of care."
          keywords="spine care clinics, locations, Dr. Bama spine, back pain clinics"
          canonical="https://www.drbamaspinecare.com/locations"
        />
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Custom Arrow */}
          <div className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 sm:left-2">
            <div
              className="text-amber-500 p-2 items-center flex justify-center"
              onClick={() => sliderRef?.current?.slickPrev()} // Ref-based navigation
            >
              <FaChevronLeft size={30} />
            </div>
          </div>

          {/* Image Slider: Occupies 75% on large screens */}
          <div className="w-full lg:w-3/4 mb-6 lg:mb-0 relative">
            <Slider ref={sliderRef} {...sliderSettings} className="relative">
              <div className="flex justify-center">
                <img
                  src="/sample_image_1.jpg"
                  alt="Slide 1"
                  className="w-full max-w-4xl h-[60vh] rounded-lg mx-auto"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/sample_image_2.jpg"
                  alt="Slide 2"
                  className="w-full max-w-4xl h-[60vh] rounded-lg mx-auto"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/sample_image_3.jpg"
                  alt="Slide 3"
                  className="w-full max-w-4xl h-[60vh] rounded-lg mx-auto"
                />
              </div>
            </Slider>
          </div>

          {/* Content: Occupies 25% on large screens */}
          <div className="w-full lg:w-1/4 text-center lg:text-left px-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Dr.Bama Spine Care
            </h3>
            <p className="text-gray-700">
              With over{" "}
              <span className="text-xl font-semibold text-amber-600">
                32 years of experience
              </span>{" "}
              in spine care treatment, we at Dr. Bama Spine Care are dedicated
              to providing effective and personalized solutions for a wide range
              of spinal and musculoskeletal conditions. Our expertise lies in
              merging the ancient wisdom of Ayurveda with the latest
              advancements in modern medical technology, ensuring that our
              patients receive the highest standard of care.
            </p>{" "}
            <button
              className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600"
              onClick={() => navigate("locate")}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right Custom Arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
          <button
            className="text-amber-500 items-center flex justify-center"
            onClick={() => sliderRef?.current?.slickNext()} // Ref-based navigation
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      </section>

      {/* Section 2: Creative Text */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Combined Shape <span className="text-amber-500">15,000+</span>{" "}
            surgeries avoided
          </h2>
          <h3 className="text-xl md:text-3xl font-medium">
            Combined Shape <span className="text-amber-500"> Ranked #1</span> in
            5 cities
          </h3>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto sm:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogsData.slice(0, 4).map((blog, index) => (
              <div
                key={index}
                className="relative group bg-cover bg-center h-96 rounded-lg overflow-hidden"
                onClick={() => handleCardClick(blog)}
              >
                {/* Zoom-Out Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${`https://picsum.photos/id/${
                      blog.id + 1
                    }/400/300`})`,
                  }}
                ></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20  transition-all duration-300"></div>

                {/* Title and Subtitle */}
                <div className="absolute bottom-4 left-4 text-white group-hover:text-amber-600">
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <h3 className="text-sm font-semibold">{blog.description}</h3>
                </div>

                {/* Right Arrow Icon */}
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-amber-600">
                  <FaChevronRight size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* All Posts Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/blogs")} // Navigate to the desired route
              className="px-6 py-2 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
            >
              View All Blogs
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Conditions We Treat
          </h2>

          {/* Conditions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedConditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg hover:bg-gray-50 transition-all cursor-pointer group"
                onClick={() =>
                  handleCardClick(
                    blogsData.filter((blog) => condition.id === blog.id)[0]
                  )
                }
              >
                {/* Text */}
                <span className="text-gray-800 text-lg group-hover:text-amber-500 transition-colors">
                  {condition.label}
                </span>
                {/* Arrow Icon */}
                <FaChevronRight className="text-gray-500 group-hover:text-amber-500 transition-colors" />
              </div>
            ))}
          </div>

          {/* View All / View Less Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            The Dr.Bama Spine Care Difference
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1: Non-Surgical Approach */}
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <FaCogs size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Non-Surgical Approach
              </h3>
              <p className="text-gray-700">
                Our algorithm-based treatment approach focuses on non-invasive
                solutions, providing targeted treatment with live biofeedback to
                ensure effective recovery without surgery.
              </p>
            </div>

            {/* Feature 2: 100% Success Rate */}
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <FaFlask size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Success Rate
              </h3>
              <p className="text-gray-700">
                Our treatment methods have shown a 100% success rate in
                providing relief, as backed by European and American global
                guidelines, offering a scientifically validated approach to
                spinal health.
              </p>
            </div>

            {/* Feature 3: Multi-Specialist Team */}
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <FaUsers size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Multi-Specialist Team
              </h3>
              <p className="text-gray-700">
                Our team combines four medical disciplines to provide accurate
                diagnosis and treatment, ensuring the most comprehensive care
                for each patient.
              </p>
            </div>

            {/* New Feature 4: Personalized Care */}
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <FaHeart size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Care
              </h3>
              <p className="text-gray-700">
                We provide a personalized care plan for each patient based on
                their unique condition, ensuring tailored treatment for optimal
                recovery and long-term spinal health.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Hear what our patients have to say
          </h2>

          {/* Avatar Grid */}
          <div className="grid grid-cols-2 sm:flex  sm:justify-center sm:items-center sm:gap-8 gap-1 mb-8">
            {" "}
            {/* Reduced gap to 4px */}
            {patients.map((patient, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedVideo(patient.videoUrl)}
              >
                <img
                  src={patient.avatar}
                  alt={patient.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-amber-500 hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-gray-800">{patient.name}</p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          {selectedVideo && (
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src={selectedVideo}
                title="Patient Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          )}
        </div>
      </section>
      <GoogleReviews />
    </div>
  );
};

export default Home;
