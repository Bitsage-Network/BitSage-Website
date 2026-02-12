/**
 * Session API Route
 * Returns the current user session from OAuth cookies
 */

import { NextRequest, NextResponse } from 'next/server';

interface OAuthUserData {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: string;
  githubId?: number;
  githubLogin?: string;
}

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get('bitsage_oauth_session');

  if (!sessionCookie?.value) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    // Decode session data from base64
    const sessionData = JSON.parse(
      Buffer.from(sessionCookie.value, 'base64').toString('utf-8')
    ) as OAuthUserData;

    return NextResponse.json({
      user: {
        id: sessionData.id,
        email: sessionData.email,
        name: sessionData.name,
        avatar: sessionData.avatar,
        provider: sessionData.provider,
        emailVerified: true,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Session decode error:', error);
    return NextResponse.json({ user: null, error: 'Invalid session' }, { status: 401 });
  }
}

export async function DELETE(request: NextRequest) {
  // Clear session cookie for logout
  const response = NextResponse.json({ success: true });
  response.cookies.delete('bitsage_oauth_session');
  return response;
}
