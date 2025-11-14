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

!https://lh3.googleusercontent.com/gg-dl/ABS2GSl7u76s21qkXyF4XJzkH2jgiJ7KJUilxHjY2PVOjr_LCVgkLQ2mCBl0fi7oVHnymVdXnfIjAaajc-KIc81hpzQQvh_BeVTMacVd6njnvLACOyQXWISkt-mW0s33cjnTK822PwCKyoLQBuM8ayRpzkeYKnlKwNxoXUko-_mBLQr-kzpiJg=s1024-rj

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
