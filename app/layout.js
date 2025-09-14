import {
  Geist,
  Geist_Mono,
  Oswald,
  Quicksand,
  Barlow_Condensed,
  Bangers,
  Inter,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400", // Bangers only has a single weight (400)
  variable: "--font-bangers",
  display: "swap",
});

// Register Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed", // gives you a CSS variable
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Gulshan Cafe and Sweets",
  description: "Delicious food, sweets, and catering services in Gulshan.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${oswald.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
