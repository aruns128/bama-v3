import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // For star icon
import "./google-review.css";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    rating: 5.0,
    description:
      "My wife had been suffering from disc-related back pain for 10 years. We tried various treatments like chiropractic and physiotherapy, but the relief was always temporary. The pain worsened, leaving her bedridden for weeks. While on vacation in India, a family friend recommended Bama Spine Care. Dr. Bama assessed her condition in Chennai and arranged a 7-8 days of treatment with 21 sittings in Cochin. After daily sessions, she felt significant relief, and it's now been 3 months with no pain. The treatment was not only effective but also cost-efficient and quick. I highly recommend Bama Spine Care for anyone with back pain.",
    reviewerName: "Raj Kumar",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
  {
    rating: 5.0,
    description:
      "I came with a back pain and was having pains throughout the day. But I came across this centre and it gave me so much relief. The service has been great both from the Doctors and staff. I have already recommended my cousin to this place keep up the great work 👏",
    reviewerName: "Janson james",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
  {
    rating: 5.0,
    description:
      "I had severe disc prolapse with pelvic tilt and became completely bedridden for three weeks. I tried allopathy treatment but it didn't work well and the doctors suggested me to take surgical treatment. Later through a family friend Mr.Sathish I came to know about Dr. Bama and her spine care clinic. In my first two sittings I started walking with a walker and later I came to stay near their clinic to complete full treatment and i recovered completely after 21 sittings. Thanks to Dr. Bama's Spine Care Clinic!",
    reviewerName: "Isac Sugance",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
  {
    rating: 5.0,
    description:
      "Exceptional Care and Life-Changing Results! I was struggling with numbness in my hand, which disrupted my daily life and even made sleeping impossible. Desperate for relief, I turned to Bhama Spine Centre. Dr Bama & Dr. Suresh & their expert team diagnosed and treated my condition with compassion and professionalism. Thanks to their successful treatment, I'm now living pain-free and enjoying restful sleep! The numbness has completely subsided, and I've regained control over my daily activities. Bhama Spine Centre's dedication to patient care and cutting-edge treatments truly impressed me. I highly recommend them to anyone seeking effective and caring spinal care.",
    reviewerName: "Jincy binoy",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
  {
    rating: 5.0,
    description:
      "Unbelievable... it's a miracle... my rebirth... Such a gud treatment for my NECK pain.. 14yrs old pain suddenly resolve...in 21 days.. so I'm kindly thankful Dr BAMA and her supporting staff... every staff taking a ultimate effort my treatment..  speechless.. again Thank u so so much... God bless you everyone",
    reviewerName: "Ratheesh R",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
  {
    rating: 5.0,
    description:
      "I highly recommend this place for pain management and relief..Moreover they are giving very kind and caring services …very much satisfied with their treatment😊😊😊 Atlast best place for all our spinal cord issues …",
    reviewerName: "AKASH BELWIN M",
    reviewLink: "https://g.co/kgs/B1RMbkx",
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets and smaller screens
        settings: {
          slidesToShow: 2, // Show 2 cards on medium-sized screens
        },
      },
      {
        breakpoint: 768, // mobile screens
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Rated 4.9 stars on Google
        </h2>

        {/* Review Carousel */}
        <Slider {...settings} className="review-carousel">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg mb-6 mx-2 min-h-[200px]" // Set a fixed height for all cards
            >
              {/* Star Rating */}
              <div className="flex mb-4 items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-amber-500 ${
                      i < Math.floor(review.rating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-700">{review.rating}</span>
              </div>

              {/* Review Description */}
              <p className="text-lg text-gray-800 mb-4 review-description">
                {review.description}
              </p>

              {/* Reviewer Name and Review Link */}
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">
                  {review.reviewerName}
                </span>
                <a
                  href={review.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:underline"
                >
                  <FcGoogle size={30} />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewCarousel;
