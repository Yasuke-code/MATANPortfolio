import React from 'react'
import Menu from './hamborger'

export default function Navbar() {
    return (
        <div className=' sticky top-0  w-dvw z-10 bg-violet-900 shadow-sm trancition-opacity ease-in px-2 '>
            <div className='flex text-white text-xl items-center justify-between md:py-2 md:px-10 border-b-[1px] font-semibold md:px6 '>
                <div className='text-3xl font-serif '>
                    MATAN.dev
                </div>
                <div
                    className="
                
                "
                >
                    <Menu />


                </div>
                <div
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
                    className="
                            hidden
                            md:flex
                            flex-row
                            items-center
                            justify-between
                            gap-3   
                            border-neutral-500
                            rounded-xl   
                            shadow-md
                            "
                >
                    <button className="
                               py-1
                               px-2
                               border-r-indigo-500
                               hover:shadow-md 
                               hover:bg-indigo-500   
                               transition ease-in-out delay-150
                               hover:scale-110
                               rounded-r-md
                               rounded-l-xl
                            
                              

                        ">
                        Home
                    </button>

                    <button
                        className="
                               py-1
                               px-2
                               border-r-indigo-500
                               border-l-indigo-500
                               transition ease-in-out delay-150
                               hover:scale-110
                               hover:shadow-md 
                               hover:bg-indigo-500 
                               rounded-md
                        ">
                        About
                    </button>


                    <button
                        className="
                               py-1
                               px-2
                               border-solid
                               border-l-indigo-500
                               hover:shadow-md 
                               hover:bg-indigo-500 
                               transition ease-in-out delay-150
                               hover:scale-110
                               rounded-md
                        ">
                        Projects
                    </button>
                    <button className="
                               py-1
                               px-2
                               border-r-indigo-500
                               hover:shadow-lg   
                               hover:bg-indigo-500  
                               rounded-r-xl
                               rounded-l-md
                               transition ease-in-out delay-150
                               hover:scale-110

                        ">
                        Contact
                    </button>
                </div>
            </div>

        </div>
    )
}
