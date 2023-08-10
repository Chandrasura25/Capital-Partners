import Navbar from "../components/Navbar";
import About from "../components/About";
import homeStyles from "../styles/Home.module.css";
import {AnimatePresence} from "framer-motion";
const Home = () => {
  return (
    <AnimatePresence>
    <div className={homeStyles.container}>
      <div className={homeStyles.parallaxBg}>
        <div className={homeStyles.content}>
          <Navbar />
          <About />
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Home;
