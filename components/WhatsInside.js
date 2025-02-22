import { motion } from 'framer-motion';

export default function WhatsInside() {
  return (
    <section id="learn" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[60%] space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-900">
                The Good Stuff
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-indigo-700 bg-clip-text text-transparent">
                What's Inside?
              </h2>
              <h3 className="text-xl font-semibold text-purple-800">
                The Science is Simple: Your gut needs prebiotics to thrive.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Your body deserves more than just another drink. Hydration is key, but so is gut health—and we've got both covered. With zero sugar, 8% fiber, and prebiotics that work wonders for digestion, ENLITE is the fizz your body will actually thank you for.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Clean ingredients, bold flavors, and no junk—just pure refreshment with benefits.
              </p>
              <div className="flex items-center gap-2 text-xl font-medium text-purple-800">
                <span className="text-2xl">⚡</span>
                Why? Because we actually care about what you sip.
              </div>
            </div>

            <ul className="space-y-8">
              {[
                {
                  title: "💖 Prebiotic Fiber",
                  description: "8% daily fiber from premium prebiotic fiber that feeds your good gut bacteria",
                  gradient: "from-pink-500 to-purple-500"
                },
                {
                  title: "🚫 Zero Sugar – No spikes, no crashes",
                  description: "Zero sugar, zero calories - sweetened naturally with monk fruit and stevia",
                  gradient: "from-purple-500 to-indigo-500"
                },
                {
                  title: "💦 Real Flavors – No artificial junk",
                  description: "Pure fruit extracts and natural flavors for authentic taste",
                  gradient: "from-indigo-500 to-blue-500"
                },
                {
                  title: "🍃 Naturally Flavored & Clean AF",
                  description: "Perfectly carbonated purified water for the ideal refreshing fizz",
                  gradient: "from-blue-500 to-cyan-500"
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                >
                  <span className={`flex-shrink-0 w-1.5 h-auto bg-gradient-to-b ${item.gradient} rounded-full`}></span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Images - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[40%] relative h-[600px]"
          >
            <div className="relative w-full h-full">
              {/* Top Image */}
              <motion.div
                initial={{ x: 40, y: -40 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-0 w-[80%] aspect-[4/3] shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 border-2 border-purple-300 rounded-2xl transform -rotate-6"></div>
                <img
                  src="/images/fruits.jpg"
                  alt="Natural Ingredients"
                  className="w-full h-full object-cover rounded-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
                />
              </motion.div>

              {/* Bottom Image */}
              <motion.div
                initial={{ x: -40, y: 40 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-20 right-0 w-[80%] aspect-[4/3] shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 border-2 border-purple-300 rounded-2xl transform rotate-6"></div>
                <img
                  src="/images/girl-sipping-photo.jpeg"
                  alt="Premium Components"
                  className="w-full h-full object-cover rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
