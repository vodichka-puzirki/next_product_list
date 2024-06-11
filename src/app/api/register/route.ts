import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

import { AUTH_BASE_URL } from '@/constans/FirebaseAPI';

const API_KEY = process.env.FIREBASE_API_KEY;

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    const res = await fetch(`${AUTH_BASE_URL}:signUp?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await res.json();

    cookies().set('refresh_token', data.refreshToken);
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(e);
  }
};
