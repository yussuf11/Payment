import React from 'react'
import { footerLinks, socialMedia } from './DataLocation'
import styles from '../Website/style'
import logo from '../images/GO.jpg'
const Footer = () => {
  return (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col  justify-start mr-10">
<img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain ' />
<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable and secure.</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {
          footerLinks.map((footerLink) => (
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px] " key={footerLink.key}>
              <h4 className='font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
              <ul className='list-none mt-4'>
                {
                  footerLink.links.map((link, index) => (
                    <li key={link.name} className={`font-normal text-[16px] leading-[24px]
                     text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length- 1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className='font-medium text-[18px] text-center leading-[27px] text-[white]'>Copyright &copy; 2023 EazyPay. All Rights Reserved.</p>
      <div className="flex flex-row md:mt-0 mt-6">
        |{
          socialMedia.map((social, index) =>(
            <div className={`w-[21px] text-white h-[21px] cursor.pointer ${index !== socialMedia.length-1 ? "mr-6" : "mr-0" } hover:text-blue-500`} key={social.id}>{social.icon}</div>
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default Footer