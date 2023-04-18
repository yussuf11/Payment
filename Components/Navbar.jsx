import React,{useState} from 'react'
import {HiMenuAlt2} from 'react-icons/hi';
import {MdCancel} from 'react-icons/md'
import Go from '../images/GO.jpg' 
import { navLinks } from './DataLocation'
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
<nav className='w-full flex py-6 justify-between items-center navbar'>
  <img src={Go} alt="go" className='w-[124px] ' />
  <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
    {
      navLinks.map((nav,i) =>(
        <li key={nav.id} className={`font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}>
          <a href={`#${nav.id}`}> {nav.title}</a></li>
      ))
    }
  </ul>
  <div className="sm:hidden flex flex-1 justify-end items-center">
    <button onClick={() => settoggle((prev) => !prev)} className='w-[28px] h-[58px] object-contain'>
      {toggle ? <MdCancel className='text-white' /> : <HiMenuAlt2 className='text-white'/>}
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
      <ul className='list-none flex flex-col justify-end items-center flex-1'>
    {
      navLinks.map((nav,i) =>(
        <li key={nav.id} className={`font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}>
          <a href={`#${nav.id}`}> {nav.title}</a></li>
      ))
    }
  </ul>
      </div>
</button>
  </div>
</nav>
  )
}

export default Navbar