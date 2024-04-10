import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";

// export const revalidate = 0;
export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    const supabase = createServerClient();
    const {user, password} = body;

    await supabase.auth.getUser();

    const users = await supabase.from('users').select('*').filter("username", "eq", user).filter("password", "eq", password);
    console.log("usuario de supabase", users);

    const login = users.data?.find((element) =>  element.username === user 
            && element.password === password)
    
    if( login !== undefined){
        return Response.json({message: "Bienvenido"})
    }else{
        return Response.json({message: "User o pass incorrecto"})
    }
}