import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ['Frontend Developer', 'Web Designer'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1));
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingSpeed]);
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
        {/* Left Column - Text Content */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 12,
            duration: 0.8
          }}
        >
          <p className="text-indigo-400 text-xl mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ashvini</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            I'm a <span className="font-bold text-indigo-400 border-r-2 border-indigo-400 animate-pulse">
              {text}
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            I'm a passionate Web Designer & Frontend Developer passionate about creating clean, responsive, and visually engaging websites. I blend design thinking with frontend expertise to build intuitive, modern interfaces that deliver seamless user experiences✨.
          </p>
          
          <div className="mb-12">
            <a
              href="/AshviniResume.pdf"
              download="Ashvini_Resume.pdf"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-center shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 12,
            delay: 0.2,
            duration: 0.8
          }}
        >
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-4 border-gray-800">
                <img 
                  src="/myphoto.jpg" 
                  alt="Ashvini" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}