// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

// import { cookieStorage, createStorage } from "wagmi";
// // import { mainnet, sepolia, base, dogechain } from "wagmi/chains";
// import { mainnet, base, optimism, arbitrum , lineaSepolia} from "wagmi/chains";

// // Get projectId at https://cloud.walletconnect.com
// export const projectId = process?.env?.NEXT_PUBLIC_PROJECT_ID;

// if (!projectId) throw new Error("Project ID is not defined");

// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3Modal.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// // Create wagmiConfig
// const chains = [mainnet, optimism, arbitrum, base, lineaSepolia] as const;
// export const config: any = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   //   ...wagmiOptions, // Optional - Override createConfig parameters
// });

// //0x46Cd627b680d4681AaCa7C240392eca089631b67

import { http, createConfig } from "wagmi";
import { base, mainnet, optimism } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

export const projectId = process?.env?.NEXT_PUBLIC_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId } as any),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
