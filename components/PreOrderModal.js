import { useState, useEffect } from 'react';

export default function PreOrderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Generate a random waitlist number between 100 and 999
    if (isOpen && !waitlistNumber) {
      setWaitlistNumber(Math.floor(Math.random() * 900) + 100);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error message when user starts typing
    if (formError) {
      setFormError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that at least one contact method is provided
    if (!formData.email && !formData.phone) {
      setFormError('Please provide either an email address or phone number.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formData2 = new FormData();
      formData2.append('waitlist', 'true');
      
      if (formData.email) {
        formData2.append('email', formData.email);
      }
      
      if (formData.phone) {
        formData2.append('phone', formData.phone);
      }

      await fetch('https://formbold.com/s/oDryy', {
        method: 'POST',
        body: formData2,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative top gradient */}
        <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
        
        <div className="p-6 md:p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Healthy Fizz Revolution!</h3>
                <p className="text-gray-600">
                  Be among the first to experience Enlite when we launch! No sugar, all taste.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    WhatsApp Number
                    <span className="ml-1 text-gray-500 text-xs">(For updates via WhatsApp)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                {/* Contact Method Hint */}
                <div className="text-sm text-gray-500 italic">
                  Please provide at least one contact method.
                </div>
                
                {/* Error Message */}
                {formError && (
                  <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Reserve My Spot"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 mb-6">
                You're waitlist position #{waitlistNumber}. We'll notify you as soon as Enlite is ready to launch!
              </p>
              <p className="text-gray-700 font-medium">
                Thank you for joining the healthy fizz revolution!
              </p>
              <button
                onClick={onClose}
                className="mt-8 text-purple-600 font-medium hover:text-purple-800 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 