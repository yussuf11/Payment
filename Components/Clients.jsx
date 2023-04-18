import React from 'react'
import { clients } from './DataLocation'
import styles from '../Website/style'
import '../Website/style.css'
const Clients = () => {
  return (
<section className={`${styles.flexCenter} my-4 group`}>
  <div className={`${styles.flexCenter} flex-wrap w-full `}>
    {
    clients.map((client)=>(
      <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `} key={client.id} >
        <div className="clients">
        <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain hover:text-blue-500'/>
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Clients

//Improves your financial institution efficiency via seamless atm outsouring and support services
//offer ene-to-end cash management solutions,reconcilation software, a loyalty program and business analytics for hospitality and gaming
//Specializing in products that covers both traditional and digital payment