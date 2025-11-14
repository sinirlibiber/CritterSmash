export const HAMMER_NFT_ADDRESS = '0x...HammerNFTAddressOnAlfajores'
export const SMASH_TOKEN_ADDRESS = '0x...SmashTokenAddress'

export const HAMMER_ABI = [
  { inputs: [{ name: 'owner', type: 'address' }], name: 'balanceOf', outputs: [{ type: 'uint256' }], stateMutability: 'view', type: 'function' }
] as const

export const SMASH_ABI = [
  { inputs: [], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function' }
] as const
