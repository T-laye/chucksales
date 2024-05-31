import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import ReactQueryProvider from "@/config/ReactQueryProvider";
import NextTopLoader from "nextjs-toploader";

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
            <body>
              <NextTopLoader
                color="#688CEC"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              />

              {children}
            </body>
          </html>
        </ReactQueryProvider>
      </ReduxProvider>
    </Web3ModalProvider>
  );
}
