import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl md:text-gray-800">
              Ditch the Sugar. Sip the Spark.
            </h1>
            <h2 className="text-lg text-gray-100 md:text-2xl md:mx-6 md:text-gray-600">
              Zero sugar, Prebiotic-powered, delicious gut-loving sparkling drinks with 8% fiber, and 100% fizz — because your gut deserves better.
            </h2>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="group px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Enlitened
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-4/5 mx-auto px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-3xl filter blur-3xl opacity-30 transform -rotate-3"></div>
        <div className="relative">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.enlite.co.in"
            className="block"
          >
            <img
              className="rounded-3xl shadow-2xl transition duration-700 hover:transform hover:scale-[1.02]"
              src="images/product.png"
              alt="Product Image"
            />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-32 mb-20 space-y-12 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text uppercase"
        >
          Welcome to the fizz revolution!
        </motion.h3>

        <div className="max-w-4xl mx-auto px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🦠",
                title: "Prebiotic-Powered",
                description: "Boosts digestion & gut health.",
                gradient: "from-purple-600 to-blue-600",
                bgGradient: "from-purple-500/10 to-blue-500/10"
              },
              {
                icon: "🚫",
                title: "Zero Sugar, Zero Crap",
                description: "No junk. No nonsense.",
                gradient: "from-blue-600 to-cyan-600",
                bgGradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: "💦",
                title: "100% Refreshing",
                description: "Bold flavors, guilt-free indulgence.",
                gradient: "from-pink-600 to-rose-600",
                bgGradient: "from-pink-500/10 to-rose-500/10"
              },
              {
                icon: "🌿",
                title: "8% Fiber",
                description: "Because your gut deserves the best.",
                gradient: "from-green-600 to-emerald-600",
                bgGradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.bgGradient} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative flex items-start space-x-4">
                  <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">{item.icon}</span>
                  <div className="flex flex-col items-start text-left">
                    <span className={`text-xl font-semibold bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text mb-2`}>
                      {item.title}
                    </span>
                    <span className="text-gray-600">{item.description}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl italic text-gray-600 font-medium max-w-2xl mx-auto mt-16"
        >
          "We made soda smart. Now you can sip without the sugar guilt."
        </motion.p>
      </motion.div>
    </section>
  );
}
