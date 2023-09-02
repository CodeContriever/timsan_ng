import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react'; // You can replace this with your preferred UI library
import { news } from '../constants/index';

const NewsItem = ({ newsItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`flex my-4 flex-col md:flex-row ${newsItem.id % 2 ? 'md:flex-row-reverse' : ''
        }`}
    >
      <div className="flex-1 mx-3">
        <img src="/mosque.png" alt="news-img" />
      </div>

      <div className="flex flex-col justify-between items-start flex-1 mx-3">
        <h3 className="font-semibold text-[#38A926]">{newsItem.title}</h3>
        <p className="text-justify">{newsItem.body.slice(0, 450)}</p>
        <a href="/" className="text-[#38A926]">
          read more ...
        </a>
      </div>
    </motion.div>
  );
};

const News = () => {
  return (
    <Box as="div" className="py-2 md:py-6">
      <div className="mb-8 md:mb-16">
        <h3 className="text-center">TIMSAN BROADCAST</h3>
        <h2 className="text-[#38A926] text-center text-2xl md:text-4xl">
          Latest News
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-4"
      >
        {news.map((newsItem) => (
          <NewsItem key={newsItem.id} newsItem={newsItem} />
        ))}
      </motion.div>

      <div className="text-center mt-4 md:mt-12">
        <button
          type="button"
          className="w-[170px] h-[48px] rounded-[12px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
        >
          View all
        </button>
      </div>
    </Box>
  );
};

export default News;
