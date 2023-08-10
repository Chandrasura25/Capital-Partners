import { motion } from "framer-motion";

const Mission = () => {
  return (
    <motion.section className="" id="mission">
      <motion.div>
        <motion.h2>Our Mission</motion.h2>
        <motion.div className="textBx">
          <motion.p>
            At Capital Partners Investment PLC, our mission is to provide
            exceptional investment solutions that enable our clients to achieve
            their financial goals and secure their financial future. We are
            committed to delivering superior returns while maintaining the
            highest standards of integrity, transparency, and professionalism.
            Through rigorous research, prudent risk management, and a
            client-centric approach, we aim to be a trusted partner in wealth
            creation and capital preservation.
          </motion.p>
        </motion.div>
        <motion.div className="imgBx"></motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mission;
