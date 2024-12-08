import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";
import ThemedBody from "@/components/themeBody/ThemedBody";
import { ToastContainer } from "@/app/toast";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Aimers Academy",
  description:
    "Top-notch online tuition and coaching for students of all levels.",
  keywords: "tuition, coaching, online classes, education",
  author: "Aimers Team",
  openGraph: {
    title: "Aimers Academy",

    images: "/aimers-logo.png",

    description:
      "Empowering students with exceptional online tuition and coaching services.",
    url: "https://aimeracademy.com",
    site_name: "Aimers Academy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${roboto.className} overflow-x-hidden`}>
        <ToastContainer autoClose={1000} closeOnClick />
        <ThemeProvider>
          <ThemedBody>
            <Navbar />

            <main className="container min-h-screen mx-auto px-6 py-8">
              {children}
            </main>

            <Footer />
          </ThemedBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
