import React from "react";
import Navbar from "../navbar/navbar";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import circleImage from "../../assets/profil2.jpeg";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="bg-hijau fixed top-0 left-0 right-0 bottom-0 overflow-auto">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-start mt-4"
      >
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border bg-black border-orange rounded-lg p-4 flex items-center pb-24"
          >
            <div className="flex-shrink-0 mr-4">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src={circleImage}
                alt="Profile"
              />
            </div>
            <div>
              <h2 className="text-xl text-hijau font-bold">Rahardian Yudhis</h2>
              <p className="text-sm text-hijau font-bold">Frontend Developer</p>
              <p className="text-sm text-hijau">
                Sebagai seorang junior front end developer, Anda telah memulai
                perjalanan Anda dalam dunia pengembangan web dengan semangat
                yang besar untuk belajar dan berkembang. Sebagai pemula, Anda
                mungkin telah memiliki pemahaman dasar tentang teknologi web
                seperti HTML, CSS, dan JavaScript, dan Anda terus mengembangkan
                keterampilan Anda dalam membangun antarmuka pengguna yang
                menarik dan responsif.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border bg-black border-orange rounded-lg p-4 mt-8 flex items-center flex-col"
          >
            <h2 className="text-xl text-hijau mx-auto font-bold ">My Skill</h2>
            <hr className="w-full border-b border-hijau mt-4"></hr>
            <div>
              <div className="flex  mt-4">
                <FaReact className="text-5xl text-hijau mr-4" />
                <SiTailwindcss className="text-5xl text-hijau mr-4" />
                <FaNodeJs className="text-5xl text-hijau mr-4" />
                <FaJs className="text-5xl text-hijau mr-4" />
                <FaCss3Alt className="text-5xl text-hijau mr-4" />
                <FaHtml5 className="text-5xl text-hijau" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
