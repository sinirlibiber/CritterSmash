// pages/api/frame.ts
import { NextRequest } from 'next/server'

const HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://crittersmash.xyz/og.png" />
  <meta property="fc:frame:post_url" content="https://crittersmash.xyz/api/frame" />
  <meta property="fc:frame:button:1" content="Play CritterSmash!" />
  <meta property="fc:frame:button:1:action" content="post" />
</head>
<body>
  <h1>CritterSmash – Smash & Earn $SMASH!</h1>
</body>
</html>
`

export async function GET() {
  return new Response(HTML, { headers: { 'Content-Type': 'text/html' } })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { untrustedData } = body

  const buttonId = untrustedData.buttonIndex

  if (buttonId === 1) {
    // Oyunu başlat
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://crittersmash.xyz/game-preview.png" />
        <meta property="fc:frame:post_url" content="https://crittersmash.xyz/api/frame" />
        <meta property="fc:frame:button:1" content="Connect Wallet & Play" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://crittersmash.xyz?frame=true" />
      </head>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } })
  }

  return new Response(HTML)
}
