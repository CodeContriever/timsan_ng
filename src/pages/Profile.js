import React from "react";
import { motion } from "framer-motion";
import Nav3 from "../components/Nav3";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>

      <Header />

      <main>
        <HeroSection />
        <CTASection />
      </main>

      <Footer />

    </div>
  );
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-white border-b-2 border-gray-200 shadow-md z-[10001]"
    >
      <div className="container mx-auto px-8 py-8">
        <Nav3 />
      </div>
    </motion.header>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 py-64 mb-8"
      style={{
        backgroundImage: "url(images/mosque.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col gap-6 lg:gap-12 justify-center text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h3 className="text-4xl lg:text-6xl font-semibold font-lato leading-6 text-white">
              Coming Soon........
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-8">
      <div className="container mx-auto">
        <CTA />
      </div>
    </section>
  );
};

export default Profile;
