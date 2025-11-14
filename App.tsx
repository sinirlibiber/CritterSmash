// src/App.tsx
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom' // veya next/navigation

function App() {
  const [searchParams] = useSearchParams()
  const isFrame = searchParams.get('frame') === 'true'

  useEffect(() => {
    if (isFrame) {
      // Farcaster'dan gelen kullanıcıyı otomatik bağla (Reown destekler)
      document.title = "CritterSmash – Farcaster Frame"
    }
  }, [isFrame])

  return (
    <div>
      {isFrame && <div className="bg-purple-100 p-2 text-center">Farcaster Frame Modu</div>}
      {/* Mevcut oyun bileşenleri */}
    </div>
  )
}
