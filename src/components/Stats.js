import React from 'react'
import styles from '../styles'
import { stats } from '../constants'


const Stats = () => {
  return (
    <div className={`flex flex-wrap justify-between items-center md:w-4/5 mx-auto gap-[80px] mb-[50px]`}>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto'>
        {stats.map((stat, index) => {
          return (
            <div key={stat.id} className='border-2 border-solid border-primary rounded flex-1 p-4' >
              <h2 className={`${styles.heading2} text-[#38A926]`}>{stat.number}</h2>
              <p className={`${styles.paragraph}`}>{stat.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats