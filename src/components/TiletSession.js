import React from 'react';
import { sessions } from '../constants';

const Session = () => {
  return (
    <section className="mt-10 mb-10 py-4">
      <div>
        <h3 className="text-center">TILETS</h3>
        <h2 className="text-[#38A926] text-center text-2xl md:text-4xl">
          OUR SESSIONS
        </h2>
      </div>

      <div className="flex justify-center mb-5 md:mb-10 items-center gap-4 overflow-x-auto">
        {sessions.map((session, idx) => {
          return (
            <div key={session.id} className="flex flex-col items-center justify-between">
              <img src="images/image-4.png" alt={session.title} className="max-w-sm" />
              <p className="text-center">{session.title}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          type="button"
          className="w-[170px] h-[48px] rounded-[12px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
        >
          View all
        </button>
      </div>
    </section>
  );
};

export default Session;
