import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

export const metadata: Metadata = {
  title: "Chucksales",
  description:
    "Never struggle to raise liquidity. Dedicated to revolutionizing the way projects raise liquidity through presales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
