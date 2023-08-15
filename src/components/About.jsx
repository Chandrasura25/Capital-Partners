import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import aboutStyle from '../styles/About.module.css';
import { AboutText } from '../utils/constant';
import { Variant, textVariants, transition} from '../utils/animationVariants';

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % AboutText.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={aboutStyle.container}>
      <motion.div
        className={aboutStyle.slider}
      >
        <AnimatePresence>
        {AboutText.map((text, index) => (
            <motion.div
            className={`${aboutStyle.slide} ${
              index === activeSlide ? aboutStyle.active : ''
            } ${aboutStyle["slide" + text.id]} `}
              variants={Variant}
              key={index}
            >
              <div className={aboutStyle.caption}>
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
