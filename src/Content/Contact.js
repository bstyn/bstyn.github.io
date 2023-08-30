import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'

function Contact(){
    return(
        <div id="contact" className="flex flex-col mb-10 transition-colors duration-500 dark:text-gray-300 shadow-xl dark:shadow-stone-100 dark:shadow-none rounded-2xl bg-white dark:bg-[#36393F] mt-20 mx-10 p-5">
            <p className="font-bold text-2xl mb-5">Contact Information</p>
            <ul className="flex flex-row gap-10 justify-around">
                <li className='flex flex-row gap-3'><BsLinkedin size={28}/><a href="https://www.linkedin.com/in/bartosz-styn/"><p className='text-xl'>LinkedIn</p></a></li>
                <li className='flex flex-row gap-3'><BsGithub size={28}/><a href="https://github.com/bstyn"><p className='text-xl' >My GitHub Profile</p></a></li>
                <li className='flex flex-row gap-3'><HiMail size={28}/><p className='text-xl' >Email: barstyn@gmail.com</p></li>
            </ul>
        </div>
    )
}

export default Contact;