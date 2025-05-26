import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    icon: <FaGithub className="text-2xl" />,
    url: 'https://github.com/GodEye119',
    name: 'GitHub'
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    url: 'https://www.linkedin.com/in/ashvini-singh-yadav-22/',
    name: 'LinkedIn'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY'); // You'll need to replace this with your actual public key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // Replace these with your actual EmailJS service ID and template ID
      await emailjs.send(
        'service_l5sho88',
        'template_pjf29xn',
        templateParams,
        '3OG6a1O1UCy2nFu2v'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="w-full flex-1 flex items-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get In Touch</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#2b2151] to-[#1b133c] rounded-xl p-8 shadow-2xl shadow-indigo-500/10 hover:shadow-3xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => {
                  const bgColor =
                    social.name === 'GitHub'
                      ? 'bg-black text-white'
                      : social.name === 'LinkedIn'
                        ? 'bg-[#0A66C2] text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-indigo-600';

                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/20`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>

            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-500 text-green-400 px-4 py-3 rounded mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded mb-6">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-[#2b2151] to-[#1b133c] text-white placeholder-gray-400 border border-indigo-900 rounded-lg shadow-inner focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 transition-all duration-100"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-[#2b2151] to-[#1b133c] text-white placeholder-gray-400 border border-indigo-900 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gradient-to-br from-[#2b2151] to-[#1b133c] text-white placeholder-gray-400 border border-indigo-900 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                  placeholder="Write your subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gradient-to-br from-[#2b2151] to-[#1b133c] text-white placeholder-gray-400 border border-indigo-900 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}