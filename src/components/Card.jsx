import motion from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';
const Card = ({index}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        </motion.div>
  )
}

export default Card