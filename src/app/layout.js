// src/app/layout.js
import { Work_Sans } from 'next/font/google'; // Import Work Sans
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap', // Important for performance
  variable: '--font-work-sans', // Define a CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}