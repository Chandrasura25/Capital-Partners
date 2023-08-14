import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutStyle from '../styles/About.module.css';
import { AboutText } from '../utils/constant';
import { Variant, textVariants, transition, slideContainerVariants } from '../utils/animationVariants';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AboutText.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={aboutStyle.container}>
      <motion.div
        className={aboutStyle.slider}
        variants={slideContainerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <AnimatePresence>
          {AboutText.map((text, index) => (
            <motion.div
              className={`${aboutStyle.slide} ${aboutStyle["slide" + text.id]}`}
              variants={Variant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={index}
              custom={index === currentSlide ? 0 : 1}
            >
              <div className={aboutStyle.caption}>
                <motion.h2 variants={textVariants} transition={transition}>
                  {text.title}
                </motion.h2>
                <p>{text.description}</p>
              </div>
            </motion.div>
          ))}
          <motion.div className={`${aboutStyle.slide} ${aboutStyle.slide1}`} variants={Variant}>
            <div className={aboutStyle.caption}>
              <motion.h2 variants={textVariants} transition={transition}>
              Welcome to Capital Partners Investment Plc
              </motion.h2>
              <p>
              A leading investment company with a diverse portfolio covering various sectors of the economy. With a steadfast commitment to excellence and a track record of success, we aim to facilitate growth, create value, and generate sustainable returns for our investors.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default About;
