import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import PropTypes from "prop-types";
import cardStyles from "../styles/Card.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Card = ({ id, title, clr, content }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", "spring", id * 0.5, 0.75)}
      className={cardStyles.drop}
      style={{ "--clr": clr }}
    >
      <div className={cardStyles.content}>
        <h2>0{id}</h2>
        <h4>{title}</h4>
        <ReactReadMoreReadLess
          charLimit={200}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
        >
          <p>{content}</p>
        </ReactReadMoreReadLess>
        <a href="#">Read More</a>
      </div>
    </motion.div>
  );
};
// Add prop validation
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  clr: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Card;
