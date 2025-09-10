import { Barlow_Condensed } from "next/font/google";
import "./globals.css";


const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={barlowCondensed.variable}>
      <body
        className={`${barlowCondensed.variable} antialiased`}
        style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
