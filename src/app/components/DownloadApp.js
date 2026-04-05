'use client';

import { motion } from 'framer-motion';
import { FaGooglePlay, FaDownload, FaStar } from 'react-icons/fa';

export default function DownloadApp() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-900 rounded-2xl shadow-xl p-8"
      >
        {/* App Preview */}
        <div className="flex items-center justify-center">
          <motion.img
            src="/logo.png"
            alt="Inovetta Fitness App"
            className="rounded-2xl shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* App Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <FaGooglePlay className="text-yellow-500 text-5xl" />
            <h1 className="text-4xl font-extrabold text-yellow-500">
              Inovetta Fitness
            </h1>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Inovetta Fitness helps you manage memberships, payments, and customer
            activity efficiently. Designed for gyms and fitness clubs with a
            modern, fast, and secure experience.
          </p>

          {/* Ratings */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="text-gray-400 ml-2">5.0 Rating</span>
          </div>

          {/* Download Button */}
          <motion.a
            href="/apk/inovettafitness.apk"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center space-x-3 bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl shadow-lg"
          >
            <FaDownload />
            <span>Download APK</span>
          </motion.a>

          <p className="text-sm text-gray-400">
            Version 2.1.0 • Android 8.0+ • APK File
          </p>
        </div>
      </motion.div>
    </section>
  );
}
