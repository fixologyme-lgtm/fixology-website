import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      query, description, serviceType, stage,
      budget, timeline, workedWithAgency,
      name, email, phone, company, source,
    } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const supabase = createServiceClient()

    const { error } = await supabase.from('leads').insert({
      search_query: query || null,
      description: description || null,
      service_type: serviceType || null,
      business_stage: stage || null,
      budget: budget || null,
      timeline: timeline || null,
      worked_with_agency: workedWithAgency === 'yes',
      name,
      email,
      phone: phone || null,
      company: company || null,
      source: source || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
