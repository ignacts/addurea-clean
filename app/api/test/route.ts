import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: '✅ API funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database: process.env.DATABASE_URL ? '✅ Conectada' : '❌ No configurada'
  });
}
