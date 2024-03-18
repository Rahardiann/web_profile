import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../navbar/navbar';
import Foto1 from '../../assets/buthak.jpeg';
import Foto2 from '../../assets/landingpage.png';
import Foto3 from '../../assets/Sujawe.png';
import Foto4 from '../../assets/terappi.png';
import Foto5 from '../../assets/Manduro.jpg';
import Foto6 from '../../assets/hotel.png';

const Gallery = () => {
  return (
    <div className="bg-hijau fixed w-full h-full overflow-auto">
      <Navbar />
      <h1 className="text-center text-3xl text-purple font-bold mt-8 mb-12">My Portofolio</h1>
      <div className="w-screen flex flex-wrap justify-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Posisi awal di luar layar, masuk dari bawah
          animate={{ opacity: 1, y: 0 }} // Animasi masuk ke posisi normal
          transition={{ duration: 0.5 }} // Durasi animasi
          className="w-1/3 p-4"
        >
          <div className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110">
            <img src={Foto6} alt="Gambar 1" className="w-full h-100 object-cover transform hover:scale-90" />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0  bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg">
          
            </div>
          </div>
        </motion.div>
        {/* Sisipkan kode motion untuk gambar 2 - 6 */}
        {/* Gambar 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Posisi awal di luar layar, masuk dari bawah
          animate={{ opacity: 1, y: 0 }} // Animasi masuk ke posisi normal
          transition={{ duration: 0.5, delay: 0.1 }} // Durasi animasi dan delay 0.1 detik
          className="w-1/3 p-4"
        >
          <div className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110">
            <img src={Foto2} alt="Gambar 2" className="w-full h-100 object-cover transform hover:scale-90" />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0  bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg">
          
            </div>
          </div>
        </motion.div>
        {/* Sisipkan kode motion untuk gambar 3 - 6 */}
        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Posisi awal di luar layar, masuk dari bawah
          animate={{ opacity: 1, y: 0 }} // Animasi masuk ke posisi normal
          transition={{ duration: 0.5, delay: 0.2 }} // Durasi animasi dan delay 0.2 detik
          className="w-1/3 p-4"
        >
          <div className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110">
            <img src={Foto3} alt="Gambar 3" className="w-full h-100 object-cover transform hover:scale-90" />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0  bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg">
             
            </div>
          </div>
        </motion.div>

        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Posisi awal di luar layar, masuk dari bawah
          animate={{ opacity: 1, y: 0 }} // Animasi masuk ke posisi normal
          transition={{ duration: 0.5, delay: 0.2 }} // Durasi animasi dan delay 0.2 detik
          className="w-1/3 p-4"
        >
          <div className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110">
            <img src={Foto4} alt="Gambar 3" className="w-full h-100 object-cover transform hover:scale-90" />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0  bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg">
             
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Gallery;
