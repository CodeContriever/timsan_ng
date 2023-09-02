import React from 'react';
import styles from '../styles';

// SubscriptionForm component
const SubscriptionForm = () => (
  <form className="bg-[#EBF9FF] flex justify-between items-center rounded-lg py-1 px-2">
    <input
      name="email"
      type="email"
      placeholder="Enter your email address"
      className="bg-transparent border-hidden caret-primary text-black focus:ring-0"
    />
    <button className="px-3 py-1 text-center text-[#F2F2F2] rounded-lg bg-[#38A926] cursor-pointer">
      Subscribe
    </button>
  </form>
);

// CTA component
const CTA = () => {
  return (
    <section className="bg-[#38A926] text-white md:w-5/6 mx-auto p-4 md:py-6 lg:py-20 md:px-24 z-10 relative top-24">

      <div className="flex flex-col md:flex-row justify-evenly items-center px-6 md:px-0">
        <div className="">
          <h2 className={styles.heading2}>Subscribe to our bi-weekly News Letter</h2>
          <h3 className="font-semibold">TIMSAN Alert and Events</h3>
          <p>Stay up to date with our weekly dose.</p>
        </div>

        <div className="p-12 md:p-6">
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
};

export default CTA;
