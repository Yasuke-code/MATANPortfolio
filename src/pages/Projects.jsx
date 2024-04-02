
import Carousel from "../components/Project-til/Carousel";
const Projects = () => {


    return (
        <>
            <div className="    pt-3 flex  text-indigo-900/85 w-dvw bg-violet-200">


                <div className="   min-w-[300px] max-w-[1400px ">

                    <div className=" text-xl justify-center text-center items-center px-0  my-4">

                        <div className="text-md font-bold text-indigo-700 px-3">
                            <div className="text-3xl text-left ">MyProjects</div>


                        </div>

                    </div>
                    <Carousel />
                    {/* <div className="flex flex-col gap-4 ">
                            <div className="flex flex-row w-dvw justify-between bg-violet-300 rounded-2xl hover:bg-violet-400 hover:text-violet-900  p-0">
                                <div>coinSnail</div>
                                <img className=" block  max-h-80 w-auto h-auto" src="https://i.ibb.co/Xp9kRvK/1.png" />
                            </div>
                            <div className="flex flex-row min-w-[300px] justify-between">
                                <div>calc</div>
                                <img className=" block  max-w-72 max-h-80 w-auto h-auto" src="https://i.ibb.co/zx1sQBn/clac.png" />
                            </div>
                            <div>webapp</div>
                            <div>Exercise Tracker</div>
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default Projects