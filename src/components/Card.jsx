import { motion } from 'framer-motion'; 
import { fadeIn } from '../utils/animationVariants';
import PropTypes from 'prop-types'; 
import cardStyles from '../styles/Card.module.css';
const Card = ({ id, name }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", "spring", id * 0.5, 0.75)}
      className={cardStyles.drop}
    >
      <div class="drop" style="--clr: #">
        <div class="content">
          <h2>01</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            saepe?
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </motion.div>
  );
};
// Add prop validation
Card.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, 
  };
export default Card;
