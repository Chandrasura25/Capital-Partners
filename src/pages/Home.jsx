import Navbar from "../components/Navbar";
import homeStyles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.parallaxBg}>
        <div className={homeStyles.content}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
