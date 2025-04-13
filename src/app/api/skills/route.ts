import { NextResponse } from 'next/server';
import skillsData from '@/data/skills.json';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(skillsData);
} 