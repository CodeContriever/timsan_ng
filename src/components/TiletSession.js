import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react'; // You can replace this with your preferred UI library
import { sessions } from '../constants';

const SessionCard = ({ session }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between"
    >
      <img src="images/image-4.png" alt={session.title} className="max-w-sm" />
      <p className="text-center">{session.title}</p>
    </motion.div>
  );
};

const Session = () => {
  return (
    <Box as="section" className="mt-10 mb-10 py-4">
      <div>
        <h3 className="text-center">TILETS</h3>
        <h2 className="text-[#38A926] text-center text-2xl md:text-4xl">
          OUR SESSIONS
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center mb-5 md:mb-10 items-center gap-4 overflow-x-auto"
      >
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </motion.div>

      <div className="text-center">
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

export default Session;
