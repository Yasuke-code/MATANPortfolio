import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react'

import { FaRegCopyright } from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";



export default function Footer() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_1cka4vf', 'template_u9haimu', form.current, {
        //     publicKey: 'QnnYt6Lq9j8KvdAxV',
        // })

    }
    return (

        <>
            <div className='bg-indigo-800  text-violet-50/85 '>


                <div className='flex flex-col md:flex-row items-center justify-center md:justify-around pt-5'>

                    <div className='text-ellipsis p-10'>
                        <div className=" flex  flex-col m-0 p-2 py-10">

                            <div className='flex text-5xl font-semibold font-serif'>
                                Get in Touch
                            </div>


                            <div className='flex text-xl font-semibold font-serif'>
                                Look me up on socialmedia
                            </div>

                            <div className="flex flex-row justify-around pt-1 md:pt-3">

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
                                <a href="#" target="_blank">
                                    <FaFacebookSquare
                                        className="   
                                            transition ease-in-out delay-50
                                            hover:scale-150
                                            "
                                        size={40} />
                                </a>
                                <a href="#" target="_blank">
                                    <FaTwitterSquare
                                        className="   
                                            transition ease-in-out delay-50
                                            hover:scale-150
                                            "
                                        size={40} />
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className=' flex flex-col justify  bg-indigo-500/65 shadow-lg rounded-lg '>
                        <div className='w-full text-2xl font-serif font-bold text-center pt-4 '>
                            Contact me
                        </div>
                        <div className='flex flex-col items-center justify-center p-5 gap-5'>

                            <div className='flex flex-row px-3'>
                                <a className='px-4 py-1 flex flex-row justify-between gap-1 items-center  hover:rounded-l-lg hover:scale-110 hover:bg-indigo-500' href="https://wa.me/+972532779920?text=I%20amm%20interested%20to%interview%20you%20for%20a%20position%20on%20our%20company" target='#'><FaWhatsapp className='text-3xl  text-green-600 ' />
                                    WhatsApp
                                </a>
                                <a className='px-4 py-1 flex flex-row justify-between gap-3 items-center hover:scale-110 hover:bg-indigo-500' href="mailto:matan.s.dev@gmail.com?cc=matan.s.dev@gmail.com&subject=Exciting%20Job%20Opportunity&body=Hi%2C%0D%0A%0D%0AI%20hope%20you're%20doing%20well!%0D%0A%0D%0AI'm%20reaching%20out%20regarding%20an%20exciting%20opportunity%20we%20have%20available%20in%20the%20tech%20field.%20Your%20background%20and%20skills%20caught%20our%20eye,%20and%20we%20believe%20you%20could%20be%20a%20great%20fit%20for%20our%20team.%0D%0A%0D%0AWe're%20looking%20for%20talented%20individuals%20like%20yourself%20to%20join%20us%20in%20our%20mission.%0D%0A%0D%0AIf%20you're%20open%20to%20exploring%20new%20opportunities,%20I'd%20love%20to%20chat%20with%20you%20about%20this%20role%20in%20more%20detail.%20Please%20let%20me%20know%20if%20you're%20interested,%20and%20we%20can%20schedule%20a%20call%20at%20your%20convenience.%0D%0A%0D%0ALooking%20forward%20to%20potentially%20working%20together!"><IoIosMail className='text-3xl text-blue-950' />
                                    Email
                                </a>
                                <a className='px-4 py-1 flex flex-row justify-between gap-1 items-center hover:scale-110 hover:bg-indigo-500' href="tel:+972532779920"><IoMdCall className='text-3xl  text-gray-950' />
                                    Call Me
                                </a>
                            </div>

                            <div>
                                leave a message
                            </div>

                            <form ref={form} onSubmit={sendEmail} className='pt-5 flex flex-col   text-indigo-950/85 font-bold text-xl gap-3 '>
                                <div className='flex justify-between' >
                                    <label className='hidden'>Name</label>
                                    <input type="text" name="user_name" placeholder='Name' className='text-md rounded-md h-10 px-2 w-2/6' />
                                    <label className='hidden px-'>Email</label>
                                    <input type="email" name="user_email" placeholder='Email' className='rounded-md h-10 px-2  w-3/5' />
                                </div>

                                <label className='hidden'>Message</label>
                                <textarea name="message" placeholder='Wirte your message...' className='w-full rounded-md h-40 p-2' />

                                <div className='flex justify-between items-end' >
                                    <button type="submit" value="Send" className='   shadow-lg bg-violet-100 w-fit px-3 py-1 hover:text-violet-100 hover:bg-indigo-950/85 rounded-lg' >
                                        Send
                                    </button>
                                    <div className='text-violet-200 font-mono text-sm'>I will get back to you as soo as possible</div>
                                </div>
                            </form>


                        </div>
                    </div>


                </div >
                <div className='pl-2 font-serif font-semibold text-xs flex items-center'><FaRegCopyright />
                    copyright-MATAN SOLOMON</div>
            </div >
        </>
    )
}