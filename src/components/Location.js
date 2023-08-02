import React from 'react'
import styles from '../styles'
// import Container from './Container';
// import Wrapper from './Wrapper';
import { Box } from '@chakra-ui/react';

const Location = () => {

  return (

    <Box
      className={`py-2 md:py-6 `}
    >
      <div className='py-12'>
        <h3 className='text-center'>OUR MAP</h3>
        <h2 className={`${styles.heading2}  text-primary text-center`}>Locate a Chapter</h2>

        <div className='border-solid border-primary mx-auto'>

          <form method='post' className='bg-gray-700 flex items-center w-[376px] h-[50px] rounded-lg px-2 mx-auto mt-4'>
            <input
              type='text'
              name='chapter-name'
              placeholder='input a chapter name'
              className='mx-auto bg-green-500 text-white border-hidden caret-primary focus:ring-0 text-white shadow-none w-full' />
          </form>

        </div>
      </div>




    </Box>
  )
}

export default Location