import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const strokeRef = useRef(null);
  const isInView = useInView(strokeRef, { once: true });

  const features = [

    {
      image: "/images/cola.jpeg",
      title: "Cola – “Like Your Fav Soda, But Smarter.”",
      description: "Old-school cola vibes, but with zero sugar and gut-friendly fizz"
    },
    {
      image: "/images/mango.jpeg",
      title: "🥭 Mango Mint – “Tropical Cool, Zero Sugar.”",
      description: "Juicy mango meets fresh mint for a refreshingly smooth sip"
    },
    {
      image: "/images/strawberry-vanilla-crop.jpeg",
      title: "🍓 Strawberry Vanilla – “Dessert, But Make It Healthy.”",
      description: "Sweet strawberries and creamy vanilla—like a treat for your gut"
    },
    {
      image: "/images/ginger-lime.jpeg",
      title: "🍋 Ginger Lime – “Spice Up Your Sip.”",
      description: "A zesty, spicy kick that wakes up your taste buds and your gut."
    },
    {
      image: "/images/sparkling-mineral-water.jpeg",
      title: "💧 Sparkling Mineral Water – “Pure Hydration, No BS.”",
      description: "Crisp, clean, and naturally sparkling—hydration just leveled up."
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === features.length - 2 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 2 : prevIndex - 1
    );
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              {/* <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
                Awesome Features
              </div> */}
              <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
                FLAVOR THAT{' '}
                <span className="relative inline-block">
                  SPARKLES
                  <svg
                    ref={strokeRef}
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 120 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 C30,2 60,8 120,3"
                      className="stroke-[3] stroke-red-400"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 130,
                        strokeDashoffset: isInView ? 0 : 130,
                        transition: 'stroke-dashoffset 1s ease-out'
                      }}
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
                Made for the modern, health-conscious
                consumer who wants it <span className="font-semibold">ALL</span>{' '} — great taste and real wellness
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gradient-to-b from-transparent to-gray-50/70 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative">
            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{ x: `-${currentIndex * 50}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ paddingLeft: '0' }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-1/2 flex-shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      {/* Vertical Oval Image Container */}
                      <div className="relative w-full max-w-[320px] aspect-[2/3] mb-8">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-[40px] transform -rotate-2"
                          style={{ borderRadius: '80px' }}
                        ></div>
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="absolute inset-0 w-full h-full object-cover transform rotate-2 transition-transform duration-500 hover:scale-105"
                          style={{ borderRadius: '80px' }}
                        />
                      </div>

                      {/* Title and Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center max-w-sm px-4"
                      >
                        <h3 className="text-2xl font-bold mb-3 text-[#f1e6ff]">
                          {feature.title}
                        </h3>
                        <p className="text-[#f1e6ff]/90 text-lg leading-relaxed font-medium">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {features.slice(0, features.length - 1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                    ? 'w-12 bg-gradient-to-r from-pink-200 to-indigo-200'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <a
                href="#order"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 
                  bg-gradient-to-r from-[#524790] to-[#8c79ed] rounded-full hover:shadow-lg 
                  hover:shadow-purple-500/30 hover:-translate-y-1 group"
              >
                Find Your Flavor – Pre-Order Now!
                <svg
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
