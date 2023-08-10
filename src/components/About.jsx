import aboutStyle from "../styles/About.module.css";
import { motion } from "framer-motion";
const About = () => {

  const Variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}
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
      <motion.div
        className={aboutStyle.slider}
      >
        <motion.div
          className={`${aboutStyle.slide} ${aboutStyle.slide1}`}
          variants={Variant}
        >
          <div className={aboutStyle.caption}>
            <motion.h2 variants={textVariants} transition={transition}>Welcome to Capital Partners Investment Plc</motion.h2>
            <p>
               A leading investment
              company with a diverse portfolio covering various sectors of the
              economy. With a steadfast commitment to excellence and a track
              record of success, we aim to facilitate growth, create value, and
              generate sustainable returns for our investors.
            </p>
          </div>
        </motion.div>
        <motion.div className={`${aboutStyle.slide} ${aboutStyle.slide2}`}>
          <div className={aboutStyle.caption}>
            <h2>Professionalism</h2>
            <p>
              Capital Partners Investment Plc has been duly registered by the
              Corporate Affairs Commission and certified by the Nigeria
              Investment Promotion Commission. Our esteemed reputation is built
              on a foundation of integrity, transparency, and professionalism,
              ensuring that our clients receive the highest standards of
              service.
            </p>
          </div>
        </motion.div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide3}`}>
          <div className={aboutStyle.caption}>
            <h2>Portfolio</h2>
            <p>
              Our investment portfolio encompasses a wide range of sectors,
              providing opportunities for both domestic and international
              investors. We believe in the power of strategic investments to
              drive economic development and improve the lives of individuals.
              As such, we have carefully selected sectors that are essential to
              Nigeria&apos;s growth and have significant potential for long-term
              profitability.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide4}`}>
          <div className={aboutStyle.caption}>
            <h2>Expertise</h2>
            <p>
              At Capital Partners Investment Plc, we combine our extensive
              industry knowledge, market insights, and investment expertise to
              identify and execute value-driven opportunities. Our team of
              seasoned professionals is committed to delivering superior returns
              while upholding the highest standards of corporate governance and
              social responsibility.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide5}`}>
          <div className={aboutStyle.caption}>
            <h2>Partner with Us</h2>
            <p>
              We invite you to explore the possibilities of partnering with
              Capital Partners Investment Plc, where your financial goals meet
              our strategic vision, creating a path to mutual success.
            </p>
          </div>
        </div>
        <motion.div
          className={`${aboutStyle.slide} ${aboutStyle.slide1}`}
          variants={Variant}
        >
          <div className={aboutStyle.caption}>
            <motion.h2 variants={textVariants} transition={transition}>Welcome to Capital Partners Investment Plc</motion.h2>
            <p>
               A leading investment
              company with a diverse portfolio covering various sectors of the
              economy. With a steadfast commitment to excellence and a track
              record of success, we aim to facilitate growth, create value, and
              generate sustainable returns for our investors.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
