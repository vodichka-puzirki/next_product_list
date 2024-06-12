import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const BASE_URL = process.env.AUTH_BASE_URL;
const API_KEY = process.env.AUTH_API_KEY;

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    const res = await fetch(`${BASE_URL}:signUp?key=${API_KEY}`, {
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

    cookies().set('refresh_token', data.refreshToken, { httpOnly: true, secure: true, sameSite: true, maxAge: 3600 });
    cookies().set('access_token', data.idToken, { httpOnly: true, secure: true, sameSite: true, maxAge: 3600 });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(e);
  }
};
