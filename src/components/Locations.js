import React from "react";
import SEO from "./SEO";

const locations = [
  {
    name: "Dr. Bama Spine Care",
    address:
      "XIII/136, Near Vallakuruz, Perumpilly, Mulanthuruthy 682314, Ernakulam.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.834619470712!2d76.25663931583436!3d9.80507269296163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08753afb9396bb%3A0x9a96e043a05ef2ba!2sDr.%20Bama%20Spine%20Care!5e0!3m2!1sen!2sin!4v1698257256706!5m2!1sen!2sin",
    phone: "+91 70120 88841, +91 99463 53204, +91 75980 67363",
  },
  {
    name: "Dr. Bama Spine Care",
    address:
      "4th Floor, SG Electronica, Mahakavi Vailoppilli Rd, Ponnurunni, Vyttila, Kochi, Ernakulam, Kerala 682019.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.175573396573!2d76.24839284039943!3d10.00471837969914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730014c2c6fb%3A0x155180e9381ee61a!2sDr.%20Bama%20Spine%20Care!5e0!3m2!1sen!2sin!4v1730039859255!5m2!1sen!2sin",
    phone: "+91 99463 53204, +91 75980 67363",
  },
  {
    name: "Grace Spine & Pain Siddha Clinic",
    address: "No.2, Indira Nagar West Extn, Salaiyur PO, Chennai 600073.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.7560528187716!2d80.14077431502437!3d12.9137714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525edf606b01cf%3A0x76eeb9868554a5ae!2sGrace%20Spine%20And%20Pain%20Siddha%20Clinic!5e0!3m2!1sen!2sin!4v1698257256706!5m2!1sen!2sin",
    phone: "+91 99463 53204, +91 75980 67363",
  },
  {
    name: "Dr. Bama Spine Care",
    address:
      "24, Ramvilas Nagar, Behind Leela Nursing Home, NGO B Colony, Tirunelveli 627007.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7282361703245!2d77.72791861569564!3d8.6950143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04126ec372d073%3A0x3d5c94ffc7f92647!2sLeela%20Clinic!5e0!3m2!1sen!2sin!4v1698257393701!5m2!1sen!2sin",
    phone: "+91 99463 53204, +91 75980 67363",
  },
];

const Locations = () => {
  return (
    <div className="text-center text-2xl mt-24">
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
            Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <>
                {/* For larger screens */}
                <SEO
                  title={location.name}
                  description={location.address}
                  keywords="spine care clinics, locations, Dr. Bama spine, back pain clinics"
                  canonical="https://www.drbamaspinecare.com/locations"
                />
                <div
                  key={index}
                  className="p-4 bg-white shadow-lg rounded-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto sm:max-w-md md:max-w-full lg:block hidden"
                >
                  <iframe
                    src={location.mapSrc}
                    title={`Map of ${location.name}`}
                    className="w-full h-48 sm:h-56 md:h-64 rounded-xl border-0 mb-4"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-1">
                      <strong>Address:</strong> {location.address}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mb-1">
                      <strong>Phone:</strong> {location.phone}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      <strong>Email:</strong> drbamaspine69@gmail.com
                    </p>
                  </div>
                </div>

                {/* For smaller screens */}
                <div key={index} className="lg:hidden">
                  <div className="p-4 bg-white shadow-lg rounded-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-5/6 mx-auto mb-6">
                    <iframe
                      src={location.mapSrc}
                      title={`Map of ${location.name}`}
                      className="w-full h-40 sm:h-48 md:h-56 rounded-xl border-0 mb-4"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        {location.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        <strong>Address:</strong> {location.address}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        <strong>Phone:</strong> {location.phone}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        <strong>Email:</strong> drbamaspine69@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
