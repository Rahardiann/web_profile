import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import Typical from 'react-typical';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";
import circleImage from "../../assets/profil2.jpeg";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000); // Ubah angka ini sesuai dengan durasi animasi

    return () => clearTimeout(timer); // Membersihkan timer pada unmount komponen
  }, []);

  return (
    <div className="bg-hijau fixed top-0 left-0 right-0 bottom-0 overflow-auto">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
            animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
            transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
            className={`text-center sm:text-left`}
          >
            <div className="text-sm mb-2">Hello world</div>
            <div className={`text-3xl mb-1 text-orange font-bold ${showAnimation ? 'animate-pulse' : ''}`}>Rahardian Yudhis</div>
            <Typical
              steps={[
                'Web Profile',
                2000,
                'Frontend Dev',
                2000
              ]}
              loop={Infinity}
              wrapper="div"
              className="text-sm"
            />
            <div className="flex justify-center sm:justify-start mt-8"> {/* Menerapkan justify-center untuk perangkat seluler */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4 text-orange "
              >
                <FaInstagram size={30} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4 text-orange "
              >
                <FaGithub size={30} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4 text-orange"
              >
                <FaFacebook size={30} />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, x: "50vw" }} // Atur posisi awal dan opacity
            animate={{ opacity: 1, y: 0, x:"0"}} // Animasikan posisi dan opacity
            transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
            className={`flex justify-center `}
          >
            <div className="w-64 sm:w-96 h-64 sm:h-96 rounded-full overflow-hidden mx-auto">
              <motion.img
                src={circleImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
