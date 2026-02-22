// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET

  // Reject if the env var is not configured
  if (!expectedSecret) {
    console.error('[revalidate] SANITY_REVALIDATE_SECRET is not set')
    return Response.json({ message: 'Server misconfiguration' }, { status: 500 })
  }

  // Expect: Authorization: Bearer <secret>
  if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/', 'layout')

    return Response.json({
      revalidated: true,
      now: Date.now()
    })
  } catch (err) {
    console.error('[revalidate] Error revalidating:', err)
    return Response.json({ message: 'Error revalidating' }, { status: 500 })
  }
}