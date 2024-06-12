import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const BASE_URL = process.env.DATABASE_BASE_URL;

export const GET = async () => {
  const ACCESS_TOKEN = cookies().get('access_token');
  try {
    const res = await fetch(`${BASE_URL}/products.json?auth=${ACCESS_TOKEN}`, {
      next: {
        revalidate: 60,
      },
    });
    const data = await res.json();

    const productList = Object.keys(data)
      .reverse()
      .flatMap((userKey) => {
        const productKeys = Object.keys(data[userKey]).reverse();
        return productKeys.map((productKey) => {
          return { ...data[userKey][productKey] };
        });
      });

    return NextResponse.json(productList);
  } catch (e) {
    return NextResponse.json(e);
  }
};
