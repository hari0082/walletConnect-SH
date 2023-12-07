import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from "viem/chains";
import ConnectButton from "./ConnectButton";
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'fc15a852db5041b86920b3ece06f88af'

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
const web3Modal = createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {

  return (
    <WagmiConfig config={wagmiConfig} web3Modal={web3Modal}>
      <ConnectButton/>
      <p>Hello WOrlD!!!</p>

    </WagmiConfig>
  );
}

export default App;
