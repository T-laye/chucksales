import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
// import { mainnet, sepolia, base, dogechain } from "wagmi/chains";
import { mainnet, base, optimism, arbitrum , lineaSepolia} from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process?.env?.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Chucksales",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, optimism, arbitrum, base, lineaSepolia] as const;
export const config: any = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  //   ...wagmiOptions, // Optional - Override createConfig parameters
});

//0x46Cd627b680d4681AaCa7C240392eca089631b67

