// animationVariants.js
export const Variant = {
    hidden: { opacity: 0, x: -50 }, // Initial hidden state
    visible: { opacity: 1, x: 0 },  // Visible state
};

export const textVariants = {
    hidden: { opacity: 0, y: 20 },   // Initial hidden state
    visible: { opacity: 1, y: 0 },   // Visible state
};

export const transition = {
    duration: 0.5, // Transition duration in seconds
    ease: "easeInOut", // Transition easing
    delay: 0.2, // Delay before transition
};

export const slideContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
export const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};
export const slidersVariants = {
    hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
    },
};
export const dotsVariants = {
    initial: {
        y: 0,
    },
    animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
};

//   const handleNext = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection("left");

//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? "right" : "left");
//     setCurrentIndex(index);
//   };
