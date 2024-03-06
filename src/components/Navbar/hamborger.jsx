
import { useCallback, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { easeInOut, motion } from "framer-motion";


const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggoleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div className=" md:hidden hover:cursor-pointer ">
            <TiThMenu className="text-3xl" onClick={toggoleOpen} />
            {isOpen &&
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 100, y: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                        duration: 0.2,

                        ease: [easeInOut]
                    }}

                    className=" absolute w-80 rounded-lg top-19 right-1 bg-purple-200"
                >

                    <div className="" onClick={toggoleOpen}>
                        <div className="w-full text-blue-900 p-5 text-center cursor-pointer ">
                            <a href="#">
                                Home
                            </a>
                        </div>
                        <hr className="bg-blue-900" />
                        <div className="w-full text-blue-900 p-5 text-center cursor-pointer" >
                            <a href="#">
                                About me
                            </a>
                        </div>
                        <hr className="bg-blue-900" />
                        <div className="w-full text-blue-900 p-5 text-center cursor-pointer ">
                            <a href="#">
                                Projects
                            </a>
                        </div>
                        <hr className="bg-blue-900" />
                        <div className="w-full text-blue-900 p-5 text-center cursor-pointer ">
                            <a href="#">
                                Contact me
                            </a>
                        </div>
                        <hr className="bg-blue-900" />


                    </div>
                </motion.div>}
        </div>
    )
}

export default Menu