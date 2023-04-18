import React from 'react'
import image from '../images/card.png'
import styles, { layout } from '../Website/style'
import Button from './Button'
const CardDeal = () => {
  return (
<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Find a better card deal<br className='sm:block hidden'/> in few easy steps.</h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>EazyPay offers end-to-end cash management solution,reconcilation software, a loyalty program and business analytics.</p>
  <Button styles="mt-10" />
  </div>
<div className={layout.sectionImg}>
  <img src={image} alt="card" className='w-[100%] h-[100%]' />
</div>
</section>
  )
}

export default CardDeal