import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

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
    // <WagmiProviders>
    <Web3ModalProvider initialState={initialState}>
      <ReduxProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ReduxProvider>
    </Web3ModalProvider>
    // </WagmiProviders>
  );
}
