import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["500", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon/icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
