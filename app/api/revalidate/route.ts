// app/api/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {

    // revalidate by tag 
    // revalidateTag('posts')
    // revalidateTag('projects')
    // revalidateTag('sanity')

    // revalidate paths
    // revalidatePath('/blog')
    // revalidatePath('/blog/[slug]', 'page') // If you have individual post pages
    // revalidatePath('/projects')
    // revalidatePath('/', 'page') // If homepage shows blog postsa
    revalidatePath('/', 'layout')
    
    return Response.json({ 
      revalidated: true, 
      now: Date.now() 
    })
  } catch (err) {
    return Response.json({ 
      message: 'Error revalidating',
      error: String(err) 
    }, { status: 500 })
  }
}