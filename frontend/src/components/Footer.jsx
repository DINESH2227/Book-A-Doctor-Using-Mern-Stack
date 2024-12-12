import React from 'react'
import { assets } from '../assets/assets'
import { NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img className='mb-5 w-35' src={assets.aa} alt='' />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>At DocOnCall, we believe that quality healthcare should be accessible to everyone. Our platform connects you with experienced medical professionals, allowing you to easily book appointments from the comfort of your home. Whether you need a routine check-up or specialized care, our dedicated team is here to support your health journey. Join our community today and experience the convenience of online consultations, empowering you to take control of your health!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li> <NavLink to='/' className='hover:text-purple-400 hover:underline'> Home </NavLink> </li>
                    <li> <NavLink to='/about' className='hover:text-purple-400 hover:underline'> About us </NavLink> </li>
                    <li> <NavLink to='/contact' className='hover:text-purple-400 hover:underline'> Contact us </NavLink> </li>
                    <li><NavLink to='/privacy-policy' className='hover:text-purple-400 hover:underline'> Privacy policy </NavLink> </li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li> <NavLink to className='hover:text-purple-500 hover:underline'> +1800-202-7031 </NavLink> </li>
                    <li> <NavLink to className='hover:text-purple-500 hover:underline'> support@doconcall.com </NavLink></li>
                </ul>
            </div>
        </div>
        
        
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 DocOnCall. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer