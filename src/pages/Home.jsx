import Navbar from "../components/Navbar";
import About from "../components/About";
import homeStyles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.parallaxBg}>
        <div className={homeStyles.content}>
          <Navbar />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
