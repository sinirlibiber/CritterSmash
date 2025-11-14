import { useAppKit } from '@reown/appkit/react'
import { useAccount, useReadContract } from 'wagmi'
import { HAMMER_ABI, HAMMER_NFT_ADDRESS } from '../lib/contract'

export default function WalletConnect({ onReady }: { onReady: (hasHammer: boolean) => void }) {
  const { open } = useAppKit()
  const { address, isConnected } = useAccount()

  const { data: hammerBalance } = useReadContract({
    address: HAMMER_NFT_ADDRESS,
    abi: HAMMER_ABI,
    functionName: 'balanceOf',
    args: [address!],
    enabled: !!address
  })

  const hasHammer = Number(hammerBalance || 0) > 0

  if (!isConnected) {
    return (
      <button onClick={() => open()} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
        Connect Wallet
      </button>
    )
  }

  if (!hasHammer) {
    return (
      <div className="bg-red-100 p-4 rounded-lg">
        <p>Hammer NFT gerekli! <a href="https://mint.hammer.xyz" className="underline">Mint et</a></p>
      </div>
    )
  }

  onReady(true)
  return null
}
