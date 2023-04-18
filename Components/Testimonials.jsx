import React from 'react'
import { feedback } from './DataLocation'
import styles from '../Website/style'


const Testimonials = () => {
  return (
<section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
  <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
  <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <h1 className={styles.heading2}>What people are<br className='sm:block hidden'/> saying about us</h1>
    <div className="w-full md:mt-0 mt-6">
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere in the world.</p>
    </div>
  </div>
  <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    {
      feedback.map((card)=> (
    <div className="flex justify-between flex-col px-10 py-12
 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
<p className="font-normal text-[18px] leading-[32px] text-white my-10">{card.content}</p>
<div className="flex flex-row">
 <img src={card.img} alt='img' className="w-[48px] h-[48px] rounded-full"  />

 <div className="flex flex-col ml-4">
  <h4 className="font-semibold text-[20px] leading-[32px] text-white">{card.name}</h4>
  <p className="font-normal text-[16px] leading-[24px] text-dimWhite">{card.title}</p>
 </div>
</div>
</div>
      ))
    }
  </div>
</section>
  )
}

export default Testimonials