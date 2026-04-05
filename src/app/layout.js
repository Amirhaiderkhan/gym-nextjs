import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
export const metadata = {
  title: 'Inovetta Fitness', // Browser tab name
  description: 'Inovetta Fitness Gym App',
  icons: {
    icon: '/logo.ico', // small logo in tab
    apple: '/logo.png',   // optional Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
