import Navbar from "../components/Navbar";
import About from "../components/About";
import Mission from "../components/Mission";
import homeStyles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import Vision from "../components/Vision";
import Pillar from "../components/Pillar";
const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={fadeIn('right', "", 0.1, 1)}
        className={homeStyles.container}
      >
        <div className={homeStyles.parallaxBg}>
          <div className={homeStyles.content}>
            <Navbar />
            <About />
            <Mission />
            <Vision />
            <Pillar/>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
