

import { useState } from 'react'
import { BiSolidChevronsLeft, BiSolidChevronsRight } from 'react-icons/bi';

export default function Carousel() {
    const slides = [
        {
            url: "https://i.ibb.co/M8Qzb6t/portfolio-til.png",
            h1: "Personal portfolio",
            discription: "My portfolio, meticulously crafted from scratch using React.js and Tailwind CSS. Dive into my projects and skills, and let's discuss how we can create something extraordinary together!",
            href: "https://matanportfolio.onrender.com/"
        },
        {
            url: "https://i.ibb.co/Xp9kRvK/1.png",
            h1: "CryptoTracker",
            discription: "Welcome to my crypto tracker COINSNAIL! With React.js, Tailwind CSS, and Zustand, I've built a seamless platform for real-time cryptocurrency tracking. Search, explore, and stay informed about the latest market trends effortlessly.",
            href: "https://coinsnail.onrender.com/"
        },
        {
            url: "https://i.ibb.co/zx1sQBn/clac.png",
            h1: "Apple style Calcolator",
            discription: "my calculator! Built with React.js and styled with Tailwind CSS, it offers seamless arithmetic operations in a sleek interface. Crunch numbers effortlessly with this modern tool.",
            href: "https://calc-by-matan-s.onrender.com/"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 1;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 1 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };
    // useEffect(() => {
    //     setTimeout(() => {
    //         nextSlide()
    //     }, 10000)
    // })
    return (
        <div className='max-w[1200px] h-fit w-full m-auto py-7 px-4 relative  '>
            {/* <div style={{ background: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

            </div> */}
            {/* right */}
            <div className='border-black-50 group px-16 py-9 bg-violet-300 gap-4 rounded-2xl ' >

                <div className='flex flex-col lg:flex-row lg:justify-center min-h-48 pt-3'>
                    <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BiSolidChevronsLeft onClick={nextSlide} />
                    </div>

                    <div className='text-left max-w-[800px] '>
                        <div className='text-xl md:pt-3 font-bold'>{slides[currentIndex].h1}</div>
                        <div className='text-md text-wrap pt-3 font-semibold max-w-[500px]'>{slides[currentIndex].discription}</div>

                    </div>
                    <hr className='bg-black px-1' />
                    <div className='max-w-[600px] min-w- h-fit flex items-center'>
                        <div>
                            <a href={slides[currentIndex].href} target='_blank'>
                                <img src={slides[currentIndex].url} width={350} />
                            </a>
                        </div>
                    </div>


                    <div className=' absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BiSolidChevronsRight onClick={prevSlide} />
                    </div>


                </div>
                <div className=' flex justify-center pt-5'>
                    <a className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md cursor-pointer" href={slides[currentIndex].href} target='_blank'>
                        visit the site
                    </a>
                </div>

            </div>
            {/* right */}
        </div>
    )
}
