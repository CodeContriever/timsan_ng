import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { stats } from '../constants';

const StatCard = ({ stat }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="border-2 border-solid border-primary rounded px-4 py-6"
    >
      <h2 className="text-[#38A926]">{stat.number}</h2>
      <p>{stat.title}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <Box as="div" className="flex flex-wrap justify-between items-center md:w-4/5 mx-auto gap-8 mb-10">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </Box>
  );
};

export default Stats;
