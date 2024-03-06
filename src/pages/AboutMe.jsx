import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiPrisma, SiExpress, SiHtml5, SiGnubash, SiGit, SiNpm } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";


function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            {isInView && <motion.div
                initial={{ opacity: 1, x: 4000, y: 300 }}
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


const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="bg-violet-200  md:h-dvh flex items-center justify-center text-indigo-900/85">

            <Section className="text-sm"><img
                className=" md:w-56  rounded-full float-right "
                src={"/Images/surfing-the-netbg.png"} height="500" width={"500"} alt={"hero"} /></Section>
            <div className="contant flex  min-w-[300px] max-w-[900px]  ">

                <div className="text-sm item-body px-2 font-semibold
                   ">
                    <div className="text-md font-bold text-indigo-700">About Me</div>
                    <br />
                    <div className="text-2xl font-bold flex items-center">
                        Dedicated web-developr based in RHOVOT,ISRAEL<FaLocationDot />
                    </div>


                    <br />
                    A dedicated professional with a robust background in logistics, management, and, foremost, web development. My professional journey spans from military logistics to various leadership roles, honing my problem-solving and strategic thinking skills. However, my true passion lies in web development. I've immersed myself in mastering HTML, CSS, JavaScript, React, Node.js, and Express, continually seeking to refine and expand my technical expertise. Recently, I've embarked on exploring JAVA, further enriching my skill set. With a steadfast commitment to excellence and continuous learning, I am poised to contribute effectively to innovative web development projects. Let's collaborate to deliver outstanding digital solutions!
                </div>
            </div>

        </div>
    )
}

export default AboutMe