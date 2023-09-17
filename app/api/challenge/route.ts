import supabase from "@/lib/supabase/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request){
    const { data: challenges } = await supabase.from('challenges').select()

    return NextResponse.json(challenges)
}