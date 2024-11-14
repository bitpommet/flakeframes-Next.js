import "./globals.css";
import { AdobeFonts } from "./_components/AdobeFonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
