import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import { SMASH_ABI, SMASH_TOKEN_ADDRESS } from '../lib/contract'

export default function ClaimButton({ score }: { score: number }) {
  const [claiming, setClaiming] = useState(false)
  const { writeContract } = useWriteContract()

  const claim = async () => {
    setClaiming(true)
    try {
      // Backend'e skor gönder → nonce al
      const res = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score, address: '0x...' })
      })
      const { nonce } = await res.json()

      writeContract({
        address: SMASH_TOKEN_ADDRESS,
        abi: SMASH_ABI,
        functionName: 'claim',
        args: [nonce]
      })
    } catch (e) {
      alert('Claim başarısız!')
    }
    setClaiming(false)
  }

  if (score < 50) return null

  return (
    <button
      onClick={claim}
      disabled={claiming}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
    >
      {claiming ? 'Claiming...' : `Claim ${Math.floor(score / 10)} $SMASH`}
    </button>
  )
}
