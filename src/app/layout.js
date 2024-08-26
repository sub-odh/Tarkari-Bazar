import "./globals.css";
import localFont from "next/font/local";
import Header from "./_components/header";
import Footer from "./_components/footer";

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Tarkari Bazar",
  description: "This is an e-commerce site for selling vegetables and fruits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
