import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiPrisma, SiExpress, SiHtml5, SiGnubash, SiGit, SiNpm } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { useEffect } from "react";



const Home = () => {

    return (

        <div className=" bg-violet-200 relative pt-8  md:pt-0 md:h-dvh  flex flex-col items-center justify-center font-bold text-indigo-900 px-1 md:px-10   justify-items ">
            <div className="bg-indigo-200/5 rounded-xl ">
                <div className="flex flex-col md:flex-row  items-center justify-around  ">
                    <div className="md:w-[600px]  flex items-center justify-around ">
                        <motion.div
                        // initial={{ opacity: 0, x: -300 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{
                        //     duration: 1.7,
                        //     ease: [0, 0.71, 0.2, 1.01],
                        //     scale: {
                        //         type: "spring",
                        //         damping: 5,
                        //         stiffness: 100,
                        //         restDelta: 0.001
                        //     }
                        // }}
                        >
                            <div>
                                < motion.div
                                    // initial={{ opacity: 1, x: -300 }}
                                    // animate={{ opacity: 1, x: 0 }}
                                    // transition={{
                                    //     duration: 0,

                                    //     scale: {
                                    //         type: "spring",
                                    //         damping: 5,
                                    //         stiffness: 100,
                                    //         restDelta: 0.001
                                    //     }
                                    // }}
                                    className=" text-sm lg:text-xl text-indigo-900/85">
                                    <TypeAnimation
                                        className="bold text-md "
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'I Am Web-Developer.',
                                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                                            "I Am Frontend Developer.",
                                            3000,
                                            'I Am Backend Developer.',
                                            3000,

                                        ]}
                                        wrapper="span"
                                        speed={60}
                                        style={{ fontSize: '2em', display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                </motion.div >
                            </div>

                            <br />
                            <div className="text-l text-indigo-900/85 tracking-normal text-wrap px-2">
                                Hi, <strong className=" text-indigo-900/85">My name is   Matan Solomon</strong>.

                                Passionate about web development,
                                committed to learning and growth.
                                Excited to contribute to your compamy  through
                                hard work and beautifull coding 💻✨
                            </div>
                            <div className="flex gap-3 pl-1">

                                <a href="https://www.linkedin.com/in/matan-solomon-17a6a8296/" target="_blank">
                                    <FaLinkedin
                                        className="   
               transition ease-in-out delay-50
               hover:scale-150
               "
                                        size={40} />
                                </a>
                                <a href="https://github.com/Yasuke-code" target="_blank">
                                    <FaGithubSquare
                                        className="   
               transition ease-in-out delay-50
               hover:scale-150
               "
                                        size={40} />
                                </a>
                            </div>

                        </motion.div>


                    </div>

                    <img className="" src={"public/Images/wall-burst.png"} height="500" width={"400"} alt={"hero"} />


                </div>
                <div>
                    <br />

                    <div className="text-3xl text-center pt-10"> Tech Stack</div>
                    <br />


                    <div className="font-bold w-full  p-3  flex flex-col lg:flex-row  items-center gap-10 ">

                        <div className="flex flex-row gap-4 ">
                            <div className="text-xl">Frontend:
                            </div>
                            <div className="flex flex-row gap-3"><SiHtml5 size={30} color="RGB(227, 76, 38)" /></div>
                            <div className="flex flex-row gap-3"> <FaCss3 size={30} color="	RGB(41, 101, 241)" /></div>
                            <div className="flex flex-row gap-3"> <FaJs size={30} color="F0DB4F" className="bg-black" /></div>
                            {/* <div className="flex flex-row gap-3"> <SiTypescript /></div> */}
                            <div className="flex flex-row gap-3"> <FaReact size={30} color="RGB(97, 219, 251)" className="bg-white/25 rounded-2xl" /> </div>
                        </div>

                        <div className="flex flex-row gap-2  items-center">
                            <div className="text-xl">Backend:
                            </div>
                            <div className="flex flex-row gap-3">  <FaNodeJs size={40} fontWeight={Blob} color="RGB(60, 135, 58)" /></div>
                            <div className="flex flex-row gap-3" ><SiExpress size={40} fontWeight={Blob} color="RGB(60, 135, 58)" /></div>
                            <div className="flex flex-row gap-3"> <SiPrisma size={40} color="rgb(38, 80, 115)" /></div>
                            <div className="flex flex-row gap-3"> <BiLogoPostgresql size={40} color="rgb(38, 80, 115)" /></div>
                            <div className="flex flex-row gap-3"><SiMongodb size={40} color="#4DB33D" /></div>

                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <div className="text-xl">scripting:
                            </div>
                            <div className="flex flex-row gap-3">  <SiGnubash size={40} color="gray" /></div>
                            <div className="flex flex-row gap-3" ><SiGit size={40} color="#F1502F" /></div>
                            <div className="flex flex-row gap-3"> <SiNpm size={40} color="#CC3534" /></div>


                        </div>

                    </div>

                </div>

            </div >
        </div >
    )
}

export default Home