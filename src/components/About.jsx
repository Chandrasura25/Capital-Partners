import aboutStyle from "../styles/About.module.css";
import { motion } from "framer-motion";
import { AboutText } from "../utils/constant";
const About = () => {
  const Variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = {
    duration: 1,
    delay: 0.5,
  };
  return (
    <div className={aboutStyle.container}>
      <motion.div className={aboutStyle.slider}>
        {AboutText.map((text, index) => (
          <motion.div
            className={`${aboutStyle.slide} ${aboutStyle["slide" + text.id]}`} 
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
        <motion.div
          className={`${aboutStyle.slide} ${aboutStyle.slide1}`}
          variants={Variant}
        >
          <div className={aboutStyle.caption}>
            <motion.h2 variants={textVariants} transition={transition}>
              Welcome to Capital Partners Investment Plc
            </motion.h2>
            <p>
              A leading investment company with a diverse portfolio covering
              various sectors of the economy. With a steadfast commitment to
              excellence and a track record of success, we aim to facilitate
              growth, create value, and generate sustainable returns for our
              investors.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
