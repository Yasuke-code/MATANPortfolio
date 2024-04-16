
import { FaLocationDot } from "react-icons/fa6";
import Section from "../helpers/Section";





const AboutMe = () => {
    return (
        <div className="scroll-smooth focus:scroll-auto bg-violet-200  md:h-dvh flex pt-3 items-center justify-center text-indigo-900/85" id="AboutMe">


            <div className="contant flex  min-w-[300px] max-w-[1000px]  ">

                <div className="text-xl  item-body px-2
               ">
                    <div className="text-3xl font-bold text-indigo-700">About Me</div>
                    <br />
                    <div className="text-3xl font-bold flex items-center">Dedicated web-developr based in RHOVOT,ISRAEL<FaLocationDot /></div>
                    <Section><img
                        className=" md:w-56  rounded-full float-end "
                        src={"/Images/surfing-the-netbg.png"} height="500" width={"500"} alt={"hero"} /></Section>


                    <br />
                    A dedicated professional with a robust background in logistics, management, and, foremost, web development. My professional journey spans from military logistics to various leadership roles, honing my problem-solving and strategic thinking skills. However, my true passion lies in web development. ve immersed myself in mastering HTML, CSS, JavaScript, React, Node.js, and Express, continually seeking to refine and expand my technical expertise. Recently,ve embarked on exploring JAVA, further enriching my skill set. With a steadfast commitment to excellence and continuous learning, I am poised to contribute effectively to innovative web development projects.  collaborate to deliver outstanding digital solutions!
                </div>
            </div>

        </div>
    )
}

export default AboutMe