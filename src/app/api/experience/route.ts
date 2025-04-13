import { NextResponse } from 'next/server';
import experienceData from '@/data/experience.json';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(experienceData);
} 