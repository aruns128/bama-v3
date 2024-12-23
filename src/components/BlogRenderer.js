import { FaShareAlt, FaTag } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

import { GrArticle } from "react-icons/gr";

const BlogRenderer = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10">
      {/* Header Image */}
      {data.image && (
        <div className="relative h-60 sm:h-72 md:h-80 bg-gray-200 flex justify-center items-center">
          <img
            src={`https://picsum.photos/id/${data.id + 1}/800/600`}
            alt={data.title || "Blog Image"}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-1 rounded-md text-sm flex items-center space-x-2">
            <GrArticle />
            <span>{data.category || "General"}</span>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 space-y-8">
        {/* Title */}
        {data.title && (
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
        )}

        {/* Author and Date */}
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center space-x-2">
            <BiTimeFive />
            <span>{data.date || "Last month"}</span>
          </span>
          <span>-</span>
          <span>
            By <strong>{data.author || "Dr.Bama"}</strong>
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {data.sections && Array.isArray(data.sections) ? (
            data.sections.map((section, index) => {
              switch (section.type) {
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold text-gray-800 mt-4 border-l-4 border-amber-500 pl-4 flex items-center space-x-2"
                    >
                      <MdCategory />
                      <span>{section.content}</span>
                    </h2>
                  );
                case "subheading":
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-gray-700 mt-3 flex items-center space-x-2"
                    >
                      <span>{section.content}</span>
                    </h3>
                  );
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-base text-gray-700 leading-relaxed"
                    >
                      {section.content}
                    </p>
                  );
                case "list":
                  return section.items && Array.isArray(section.items) ? (
                    <ul
                      key={index}
                      className="list-disc pl-6 text-base text-gray-700 space-y-2"
                    >
                      {section.items.map((item, i) => (
                        <li key={i} className="leading-normal">
                          {/* Check if item has "stage" and "symptoms" */}
                          {item.stage && (
                            <p className="font-medium text-gray-800">
                              {item.stage}
                            </p>
                          )}
                          {item.symptoms && Array.isArray(item.symptoms) ? (
                            <ul className="list-circle pl-6 space-y-1">
                              {item.symptoms.map((symptom, j) => (
                                <li key={j} className="text-gray-700">
                                  {symptom}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={index} className="text-sm text-gray-500 italic">
                      No list items available.
                    </p>
                  );
                default:
                  return (
                    <p key={index} className="text-sm text-gray-500 italic">
                      Unsupported section type.
                    </p>
                  );
              }
            })
          ) : (
            <p className="text-sm text-gray-500 italic">
              No sections available.
            </p>
          )}
        </div>

        {/* Social Share and Tags */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-2">
            {data.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2"
              >
                <FaTag />
                <span>#{tag}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-amber-500 flex items-center space-x-2">
              <FaShareAlt />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-6"></div>

      {/* Related Articles */}
    </div>
  );
};

export default BlogRenderer;
