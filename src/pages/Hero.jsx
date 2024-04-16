import { motion } from "framer-motion";

// import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"


const Hero = () => {
    return (

        <div className="bg-gradient-to-t from-violet-600 to-violet-800 h-dvh grid grid-row-6 gap-4 items-center justify-items-center font-bold text-white px-2 md:px-20 justify-items ">
            <div className="md:ml-16 md:pl-16 grid grid-cols-6 gap-0 row-start-1 row-end-5 items-centerjustify-self-center">
                <div className="col-span-6 md:col-span-3  flex items-center justify-center ">
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
                        <div className="text-4xl">
                            I'm a softwer develoter
                        </div>
                        <br />
                        <div className="text-xl text-purple-200 tracking-normal text-wrap">
                            Hi, <strong className=" text-purple-100">My name is   Matan Solomon</strong>.

                            Passionate about web development,
                            committed to learning and growth.
                            Excited to contribute to your compamy  through
                            hard work and beautifull coding 💻✨
                        </div>
                        <div className="flex gap-3">

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
                <div className=" col-start-2 col-span-3 sm:col-span-4 md:col-span-3    rounded-full -z-2" >
                    <motion.div
                    // initial={{ opacity: 0, scale: 0.5 }}
                    // animate={{ opacity: 1, scale: 1 }}
                    // transition={{
                    //     duration: 0.0,
                    //     ease: [0, 0.1, 0.2, 0.1],
                    //     scale: {
                    //         type: "spring",
                    //         damping: 105,
                    //         stiffness: 10000,
                    //         restDelta: 0.0001
                    //     }
                    // }}    
                    >
                        <img className="" src={"public/Images/wall-burst.png"} height="500" width={"500"} alt={"hero"} />
                    </motion.div>
                </div>
            </div>
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
                    className=" row-start-3 row-end-5  absolute left-3 bottom-0 text-2xl lg:text-4xl text-purple-200">
                    <TypeAnimation
                        className="bold text-md "
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I Am Web-Developer.',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "I'm Frontend Developer.",
                            1000,
                            'I Am Backend Developer.',
                            1000,
                            'I Am Here For The Code.',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </motion.div >
            </div>
        </div >

    )
}

export default Hero