import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            {isInView && <motion.div
                initial={{ opacity: 1, x: -4000, y: -300 }}

                animate={{ rotate: 360, opacity: 1, x: 0, y: 0 }}
                transition={{
                    duration: 2.9,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 150,
                        restDelta: 0.01
                    }
                }}
            >
                {children}
            </motion.div>}
        </section>
    );
}

export default Section;