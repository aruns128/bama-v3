const BlogRenderer = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Image */}
      {data.image && (
        <div className="h-60 sm:h-72 md:h-80 bg-gray-200 items-center flex justify-center ">
          <img
            src={`https://picsum.photos/id/${data.id + 1}/400/300`}
            alt={data.title || "Blog Image"}
            className="md:w-1/2  sm:w-full h-full rounded-md"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 text-left">
        {/* Title */}
        {data.title && (
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
        )}

        {/* Sections */}
        <div className="space-y-6">
          {data.sections && Array.isArray(data.sections) ? (
            data.sections.map((section, index) => {
              switch (section.type) {
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4"
                    >
                      {section.content}
                    </h2>
                  );
                case "subheading":
                  return (
                    <h3
                      key={index}
                      className="text-lg sm:text-xl font-semibold text-gray-800 mt-4"
                    >
                      {section.content}
                    </h3>
                  );
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                    >
                      {section.content}
                    </p>
                  );
                case "list":
                  return section.items && Array.isArray(section.items) ? (
                    <ul
                      key={index}
                      className="list-disc list-outside pl-6 text-sm sm:text-base text-gray-700 space-y-4"
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
                            <ul className="list-circle pl-6 space-y-2">
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
      </div>
    </div>
  );
};

export default BlogRenderer;
