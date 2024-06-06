"use client";
import { createConfig, Transport } from "@wagmi/core";
// import { WagmiProvider, createConfig, http } from "wagmi";
import { WagmiProvider, http } from "wagmi";
import { base, mainnet, arbitrum, optimism, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// import { mainnet, base, arbitrum, optimism } from "@wagmi/core/chains";
// import { http } from "@wagmi/core/transports";

// Define a compatible StorageItemMap
interface StorageItemMap {
  [key: string]: Transport; // Ensure it matches the expected Transport type
}

const config = createConfig<any, StorageItemMap>(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, base, arbitrum, optimism],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
    //   [sepolia.id]: http(),
      [base.id]: http(),
      [arbitrum.id]: http(),
      [optimism.id]: http(),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_PROJECT_ID as any,

    // Required App Info
    appName: "Chucksale",

    // Optional App Info
    appDescription:
      "Never struggle to raise liquidity. Dedicated to revolutionizing the way projects raise liquidity through presales.",
    appUrl: "https://chucksale.vercel.app", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: any) => {
  return (
    <WagmiProvider config={config as any}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
