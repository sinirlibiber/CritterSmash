export async function onRequestPost(context) {
  const { score, address } = await context.request.json()
  const valid = score > 50 && score % 10 === 0

  if (!valid) return new Response('Invalid score', { status: 400 })

  const nonce = crypto.randomUUID()
  // KV'ye kaydet: { address, score, nonce, timestamp }
  await context.env.CLAIMS.put(`${address}:${nonce}`, JSON.stringify({ score, timestamp: Date.now() }))

  return new Response(JSON.stringify({ nonce }), { status: 200 })
}
