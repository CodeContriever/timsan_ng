import React from 'react'
import styles from '../styles'
import { sessions } from '../constants'

const Session = () => {
  return (
    <section className={`mt-[50px] mb-[50px] ${styles.paddingY} `}>
      <div>
        <h3 className='text-center'>TILETS</h3>
        <h2 className={`${styles.heading2} text-[#38A926]  text-center`}>OUR SESSIONS</h2>
      </div>

      <div className='flex justify-center mb-[25px] item-center gap-4 overflow-x-auto'>
        {sessions.map((session, idx) => {
          return (
            <div key={session.id} className={`flex flex-col items-center justify-between'}`}>
              <img src='images/image-4.png' alt={session.title} className='max-w-sm' />
              <p className=''>
                {session.title}
              </p>
            </div>
          )
        })}
      </div>

      <div className='text-center mt-5'>
        <button type='button' className='w-[170px] h-[48px] rounded-[12px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'>View all</button>
      </div>


    </section>
  )
}

export default Session