import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('contact', 'true');
        
        try {
            await fetch('https://formbold.com/s/oDryy', {
                method: 'POST',
                body: formData,
            });
            
            // Show toast and clear form
            setShowToast(true);
            e.target.reset();
            
            // Hide toast after 5 seconds
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting contact form:', error);
        }
    };

    return (
        <section className="relative py-24 z-10">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-out">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message sent successfully! We'll be in touch soon.</span>
                </div>
            )}

            {/* Decorative Product Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] overflow-hidden opacity-30 pointer-events-none">
                <div
                    className="absolute -right-32 top-0 w-[400px] h-[800px] bg-cover bg-center transform rotate-12"
                    style={{
                        backgroundImage: "url('/images/cola.jpeg')",
                        filter: "blur(1px)",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Let's{' '}
                        <span className="relative inline-block">
                            Connect!
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 h-1 bg-rose-400"
                                transition={{ duration: 0.6 }}
                            />
                        </span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Have questions? Want to collaborate? Or just want to say hi?
                        We'd love to hear from you! 🎉
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Contact Form */}
                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl lg:row-span-2">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                                    placeholder="Your name"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                                    placeholder="your@email.com"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
                                    placeholder="What's on your mind?"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex justify-end"
                            >
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-rose-500/30"
                                >
                                    Send Message
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        </form>
                    </div>

                    {/* Right Top - Contact Info */}
                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start space-x-4"
                            >
                                <div className="bg-rose-100 p-3 rounded-2xl">
                                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Visit Us</h3>
                                    <p className="text-gray-600">
                                        Survey No. 143/AA/E, Medchal
                                        Hyderabad, <br /> Telangana 500100
                                    </p>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start space-x-4"
                            >
                                <div className="bg-rose-100 p-3 rounded-2xl">
                                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+91 9866519122</p>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-start space-x-4 sm:col-span-2 lg:col-span-1 xl:col-span-2"
                            >
                                <div className="bg-rose-100 p-3 rounded-2xl">
                                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">hello@enlite.co.in</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Bottom - Map */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.7714307175607!2d78.57459287507825!3d17.561555483001547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb83588b503b75%3A0x7f8cd0a3df66c3d0!2sMedchal%2C%20Telangana%20501401!5e0!3m2!1sen!2sin!4v1708697694793!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-4 w-24 h-24 bg-rose-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
            </div>
        </section>
    );
} 