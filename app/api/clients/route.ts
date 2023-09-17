import supabase from "@/lib/supabase/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request){
    const { data: clients } = await supabase.from('clients').select()
    console.log(clients)

    return NextResponse.json(clients)
}