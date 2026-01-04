import type { Metadata } from "next";
import "./globals.css";
import "@/lib/fontawesome";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
