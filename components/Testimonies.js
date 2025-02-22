import { motion } from 'framer-motion';

const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  const testimonials = [
    {
      initials: "AL",
      name: "Amber L.",
      rating: 5,
      text: "Lovinggg the cola! It makes me think of drinking cola floats with my grandma as a kid! You guys killed it!",
      product: "COLA - ZERO SUGAR SODA",
      bgColor: "bg-blue-400",
    },
    {
      initials: "JM",
      name: "Jeena M.",
      rating: 5,
      text: "My kids love Enlite, and as a mom, I love knowing my kids are staying hydrated without all the sugar.",
      product: "STRAWBERRY VANILLA - SPARKLING WATER",
      bgColor: "bg-orange-400",
    },
    {
      initials: "HB",
      name: "Harsha B.",
      rating: 5,
      text: "I LOVE THEM. They really carry the flavors of original soda and don't have any strange aftertaste like some other natural sodas!",
      product: "COLA - ZERO SUGAR SODA",
      bgColor: "bg-pink-400",
    },
    {
      initials: "AS",
      name: "Arpita S.",
      rating: 5,
      text: "As soon as I tried this, I was in disbelief of how good it was. Nothing quenches my thirst more than a cold can of Ginger Lime!",
      product: "GINGER LIME - SPARKLING WATER",
      bgColor: "bg-emerald-500",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf8f6] via-[#fdf1f3] to-[#f8d7dd]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Don't Just Make Drinks. {' '}
            <span className="relative">
              We Start Trends.
              <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-400"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join the fizz-loving movement & show us how you sip! Here's what our early birds have to say about their Enlite experience.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Image Section - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[40%]"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-3"></div>
              <img
                src="/images/ginger-lime.jpeg"
                alt="Enlite Can Splash"
                className="relative rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Testimonials Grid - 60% */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${testimonial.bgColor} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm mb-3">"{testimonial.text}"</p>
                <p className="text-xs font-semibold opacity-75">{testimonial.product}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
