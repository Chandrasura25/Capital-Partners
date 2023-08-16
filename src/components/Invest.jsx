import {motion} from "framer-motion";
import investStyles from "../styles/Invest.module.css";
const Invest = () => {
  return (
    <motion.section id="invest" className={investStyles.container}>
      <motion.div>
        <motion.h2>WHY YOU SHOULD INVEST WITH US</motion.h2>
        <motion.h4>
          Capital Partners Investment Plc:{" "}
          <span>
            Unlocking Diverse Investment Opportunities for a Thriving Future
          </span>
        </motion.h4>
        <motion.p>
          In a rapidly evolving global economy, investors seek opportunities
          that combine stability, growth potential, and diversification. Enter
          Capital Partners Investment Plc, an innovative and forward-thinking
          investment company that has carved a niche for itself by strategically
          expanding its portfolio across multiple sectors. With a focus on
          transportation, real estate, health, oil and gas, education,
          technology, and food, Capital Partners Investment Plc presents an
          enticing proposition for individuals and businesses seeking to
          maximize their investment potential.
          <i>
            This is why Capital Partners Investment Plc should be at the top of
            every investor`s list.
          </i>
        </motion.p>
      </motion.div>
      <motion.div>
        Capital Partners Investment stands as a beacon of opportunity for
        investors seeking a diversified and forward-thinking investment company.
        We position ourself as a catalyst for success. Whether you are an
        individual investor or a business seeking to maximize your investment
        potential, Capital Partners Investment presents an enticing opportunity
        to navigate the complexities
      </motion.div>
    </motion.section>
  );
};

export default Invest;
