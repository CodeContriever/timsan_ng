import React from 'react'
import styles from '../styles'
import { news } from '../constants/index'
import { Box } from '@chakra-ui/react'

const News = () => {
  return (
    <Box
      className={`py-2 md:py-6 `}
    >

      <div
        className='mb-[55px]'
      >
        <h3 className='text-center'>TIMSAN BROADCAST</h3>
        <h2 className={`${styles.heading2}  text-[#38A926]  text-center`}>Latest News</h2>
      </div>

      <div>
        {news.map(news => {
          return (
            <div
              key={news.id}
              className={` flex my-4 flex-col md:flex-row ${news.id % 2 && 'md:flex-row-reverse'}`}
            >
              <div
                className='flex-1 mx-3'
              >
                <img
                  src='/mosque.png'
                  alt='news-img'
                />
              </div>

              <div
                className='flex flex-col justify-between items-start flex-1 mx-3'
              >
                <h3
                  className='font-gill text-primary font-semibold'
                >
                  {news.title}
                </h3>
                <p
                  className={`${styles.paragraph} text-justify`}
                >
                  {news.body.slice(0, 450)}
                </p>
                <a
                  href='/'
                  className={`${styles.paragraph} text-primary`}
                >
                  read more ...
                </a>
              </div>

            </div>
          )
        })}

        <div
          className='text-center mt-[30px]'
        >
          <button
            type='button'
            className='w-[170px] h-[48px] rounded-[12px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
          >
            View all
          </button>
        </div>

      </div>

    </Box>
  )
}

export default News