import Navbar from "../components/Navbar";
import About from "../components/About";
import Mission from "../components/Mission";
import homeStyles from "../styles/Home.module.css";
import {AnimatePresence} from "framer-motion";
import Vision from "../components/Vision";
const Home = () => {
  return (
    <AnimatePresence>
    <div className={homeStyles.container}>
      <div className={homeStyles.parallaxBg}>
        <div className={homeStyles.content}>
          <Navbar />
          <About />
          <Mission />
          <Vision/>
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Home;
