'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* About Section */}
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-0.5s">
              <h3 className="text-2xl font-bold text-black">About</h3>
              <p className="text-lg text-black">
                We are a team dedicated to providing the best services.
                Our mission is to support you in your projects with passion and expertise.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-black">Contact</h3>
              <ul className="space-y-2 text-black">
                <li>Email: contact@inovetta.com</li>
                <li>Phone: +923 428 980 212</li>
                <li>Ring Road Meer Afzaal Plaza MMC Peshawar, Pakistan</li>
              </ul>
            </div>

            {/* Follow & Links Section */}
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-black">Follow Us</h3>

              <div className="flex space-x-6">
                <a href="#" className="text-black hover:text-yellow-700 transition">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>

              {/* Footer Links */}
              <div className="mt-4 space-y-2">
                <a href="/deletion-request" className="block text-black hover:text-yellow-700 underline">
                  Account Deletion Request
                </a>
                <a href="/support" className="block text-black hover:text-yellow-700 underline">
                  Help & Support
                </a>
                <a href="/privacy-policy" className="block text-black hover:text-yellow-700 underline">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="block text-black hover:text-yellow-700 underline">
                  Terms & Conditions
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} Created by Inovetta Tech. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
