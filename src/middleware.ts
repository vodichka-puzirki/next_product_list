import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const getAuth = async () => {
  const REFRESH_TOKEN = cookies().get('refresh_token')?.value;

  const res = await fetch(`https://securetoken.googleapis.com/v1/token?key=${process.env.FIREBASE_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN ?? ''}`,
  });
  const data = await res.json();

  return data;
};

export const middleware = async (request: NextRequest) => {
  const auth = await getAuth();
  const url = new URL(request.url);

  const basePath = '/';
  const publicPaths = ['/login', '/register'];
  const privatePaths = ['/home'];

  const isBasePath = basePath.includes(url.pathname);
  const isPublicPaths = publicPaths.includes(url.pathname);
  const isPrivatePaths = privatePaths.includes(url.pathname);

  if (auth.user_id) {
    if (isBasePath || isPublicPaths) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  } else if (auth.error) {
    if (isBasePath || isPrivatePaths) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api).*)'],
};
