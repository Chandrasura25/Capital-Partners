import aboutStyle from "../styles/About.module.css";
import { motion } from "framer-motion";
import { AboutText } from "../utils/constant";
import { Variant, textVariants, transition,slideContainerVariants } from '../utils/animationVariants'; 
const About = () => {
  return (
    <div className={aboutStyle.container}> 
      <motion.div className={aboutStyle.slider} variants={slideContainerVariants}>
        {AboutText.map((text, index) => (
          <motion.div
            className={`${aboutStyle.slide} ${aboutStyle["slide" + text.id]}`} 
            variants={Variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
      </motion.div>
    </div>  
  );
};

export default About;
