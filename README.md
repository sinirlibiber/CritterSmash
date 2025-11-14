## 🕳️ CritterSmash on Celo
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38BDF8?logo=tailwindcss)
![Celo](https://img.shields.io/badge/Celo-Mainnet-35D07F?logo=celo)
![Reown](https://img.shields.io/badge/Reown-AppKit-8A2BE2?logo=walletconnect)
![Wagmi](https://img.shields.io/badge/Wagmi-2.16-FF9900?logo=ethereum)
![Farcaster](https://img.shields.io/badge/Farcaster-MiniApp-6F00FF?logo=farcaster)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Functions-F38020?logo=cloudflare)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---
![unnamed (3)](https://github.com/user-attachments/assets/70e3d2b2-0826-42ec-8ab7-61b41015c152)


## 🎮 Overview
CritterSmash on Celo is a blockchain-based casual game built on Celo Mainnet, where players smash critters, earn points, and claim on-chain rewards.
The game uses React + TypeScript + Vite with Reown AppKit, wagmi, and a Cloudflare backend for claim verification.

**💰 Rewards

After the game ends, scores are converted into $SMASH tokens.
Random rewards include $SMASHE or $SMASHDollar.
Players have a daily claim limit, read from the contract.
Claims are verified through a Cloudflare Function at /api/claim.**

## Özellikler
- Reown + Wagmi ile Celo wallet bağlama
- Hammer NFT kontrolü (oynamak için gerekli)
- Skor → $SMASH claim (Cloudflare backend)
- Leaderboard (on-chain)
- Farcaster Mini App uyumlu

## 🧑‍💻 Setup & Development

### 1️⃣ Clone the Repository

```bash
https://github.com/sinirlibiber/CritterSmash.git
cd CritterSmash
```

### 2️⃣ Install Dependencies

```bash
npm install
```

## Farcaster Frame

Bu oyun **Farcaster Frame** olarak da çalışır!

### Nasıl Oynanır?
1. Warpcast'te bu postu gör:
   > 🕳️ **CritterSmash – Smash & Earn!**  
   > [Play Frame](https://crittersmash.xyz/api/frame)
2. "Play" butonuna tıkla
3. Cüzdanını bağla → Oyunu oyna!

# 1. Frontend + Frame API
npm run build
vercel --prod  # veya cloudflare pages

# 2. Backend (Cloudflare Workers)
cd functions
npx wrangler deploy

# 3. Contract (Hardhat)
npx hardhat run scripts/deploy.js --network celo

# 4. Farcaster'da Test
# Warpcast → New Cast → Frame URL yapıştır


