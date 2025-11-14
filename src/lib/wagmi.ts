import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { celo, celoAlfajores } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReownAppKitAdapter } from '@reown/appkit-adapter-wagmi'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID // .env'den

if (!projectId) throw new Error('WalletConnect Project ID eksik!')

const metadata = {
  name: 'CritterSmash',
  description: 'Smash critters, earn $SMASH on Celo!',
  url: 'https://crittersmash.xyz',
  icons: ['https://crittersmash.xyz/icon.png']
}

const wagmiConfig = createConfig({
  chains: [celoAlfajores], // testnet
  transports: { [celoAlfajores.id]: http() },
  adapters: [new ReownAppKitAdapter()]
})

createAppKit({
  adapters: [new ReownAppKitAdapter()],
  projectId,
  networks: [celoAlfajores],
  metadata,
  features: { email: true, socials: ['farcaster'] }
})

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
