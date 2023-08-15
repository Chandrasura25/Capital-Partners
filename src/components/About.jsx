import { motion, AnimatePresence } from 'framer-motion';
// import aboutStyle from '../styles/About.module.css';
import { Variant, textVariants, transition } from '../utils/animationVariants';
import { useState, useEffect } from 'react';  
import { AboutText } from '../utils/constant';
import "../styles/about.css"
const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % AboutText.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className='container'>
      <motion.div
        className='slider'
      >
        <AnimatePresence>
          {AboutText.map((text, index) => (
            <motion.div
              className={`slide ${
                index === activeSlide ? 'active' : ''
              }`}
              variants={Variant}
              key={index}
            >
              <div className='caption'>
                <motion.h2 variants={textVariants} transition={transition}>
                  {text.title}
                </motion.h2>
                <p>{text.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default About;
