import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiPrisma, SiExpress, SiHtml5, SiGnubash, SiGit, SiNpm } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div>
            <div className="pt-4
                            text-sm 
                            font-bold
                            text-indigo-950/85
                            ">
                projects</div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default Projects