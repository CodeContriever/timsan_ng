import React from 'react'
import styles from '../styles'

const Location = () => {
  return (

    <section className={`${styles.paddingY} `}>
      <div className='py-12'>
        <h3 className='text-center'>OUR MAP</h3>
        <h2 className={`${styles.heading2}  text-[#38A926]  text-center`}>Locate a Chapter</h2>

        <div className='flex justify-center items-center border-solid border-primary'>

          <form
            method='post'
            className='bg-[#38A926] w-[376px] h-[50px] rounded-lg px-2 mx-auto mt-4'
          >
            <input
              name='chapter-name'
              placeholder='input a chapter name'
              type='text'
              className='mx-auto bg-transparent border-hidden caret-primary focus:ring-0 text-white shadow-none ' />
          </form>

        </div>
      </div>




    </section>
  )
}

export default Location