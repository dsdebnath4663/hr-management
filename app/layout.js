'use client'
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CssBaseline } from "@mui/material";
import SideNav from "@/components/sideNavBar/SideNavBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    // Check for the token when the component mounts
    const token = localStorage.getItem('token');
    setTokenExists(!!token);
  }, []); // Empty dependency array means this runs once on mount


  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </Head>
      <body>
        <CssBaseline />


        {tokenExists &&
          (<>
            <Navbar />
            <SideNav />
          </>)
        }



        {/* <main style={{ marginLeft: 240, padding: '16px', transition: "margin 0.3s" }}> */}
        <main>

          {children}
        </main>
      </body>
    </html >
  );
}
