import React from 'react'
import styles from '../styles'
import { executives } from '../constants/index'
import { Box } from '@chakra-ui/react'


const Executives = () => {
  return (
    <Box className={`${styles.paddingY} `}>

      <div className='mb-[30px]'>
        <h3 className='text-center'>EXECUTIVES</h3>
        <h2 className={`${styles.heading2} text-primary text-center`}>Our National Executives</h2>
      </div>

      <div className='flex justify-between items-center flex-wrap gap-1 mb-[30px]'>
        <div className='grid gap-2 md:gap-4 lg:gap-8 grid-cols-2 md:grid-cols-5 mx-auto'>
          {executives.map((executive, idx) => {
            return (
              <div key={executive.id} className='flex flex-col items-center gap-[31px]'>
                <div className=''>
                  <img src='/profile_placeholde_img.png' alt={executive.post} />
                </div>
                <p className='bg-primary text-secondary px-2 rounded'>{executive.name}</p>
                <div className='flex gap-8'> <img src='/arrow-right.svg' alt='' /> {executive.post} <img src='/arrow-left.svg' alt='' /></div>
                {/* <div className='flex gap-1 text-center'> <img src='/arrow-right.svg' alt='' /> {executive.post} <img src='/arrow-left.svg' alt='' /></div> */}
              </div>
            )
          })}
        </div>

      </div>

      <div className='text-center mt-5'>
        <button type='button' className='w-[170px] h-[48px] rounded-[12px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'>View all</button>
      </div>




    </Box>
  )
}

export default Executives