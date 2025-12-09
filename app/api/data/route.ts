import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET handler
export async function GET(request: NextRequest) {
  try {
    // Tu lógica aquí
    const data = await prisma.user.findMany()
    
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}

// POST handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Tu lógica aquí
    const user = await prisma.user.create({
      data: body
    })
    
    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}