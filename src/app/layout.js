import { Manrope, Noto_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "ALEX.DEV | Digital Craftsmanship",
  description: "Digital Craftsmanship Portfolio",
};

import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import ParticleBackground from "../components/ParticleBackground";

import ThemeProvider from "../components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${notoSerif.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ParticleBackground />
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
