import { NextResponse } from 'next/server';
import profileData from '@/data/profile.json';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(profileData);
} 