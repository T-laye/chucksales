import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import ReactQueryProvider from "@/config/ReactQueryProvider";

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
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <Web3ModalProvider initialState={initialState}>
      <ReduxProvider>
        <ReactQueryProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </ReactQueryProvider>
      </ReduxProvider>
    </Web3ModalProvider>
  );
}
