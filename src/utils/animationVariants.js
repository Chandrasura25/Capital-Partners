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
};

export const slideContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
