import React from 'react'
import styles,{layout} from '../Website/style'
import Bill from '../images/bill.png'
const Billing = () => {
  return (
<section id='product' className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img src={Bill} alt=".." className='w-[100%] h-[100%] relative z-[5]'/>
    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient' />
  </div>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    EazyPay Payment provides retailers and shopping centres with the solution they need to manage cash efficiently, including ATMs and reconciliation software
  </p>
  <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
    <img src="" alt="google-play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
    <img src="" alt="apple-play" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
  </div>
</div>
</section>
  )
}

export default Billing