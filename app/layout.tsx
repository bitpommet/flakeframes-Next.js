import "./globals.css";
import { AdobeFonts } from "./_components/AdobeFonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SideBar from "./_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AdobeFonts />
        <Header />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
