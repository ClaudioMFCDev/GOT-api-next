import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";

// export const revalidate = 0;
export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    const supabase = createServerClient();
    const {user, password} = body;

        const { data: usuarioEncontrado, error } = await supabase.auth.signInWithPassword({
            email: user,
            password,
        })

    // console.log("usuario de supabase", usuarioEncontrado);
    
    if( error === null){
        return Response.json({message: 'Bienvenido'})
    }else{
        return Response.json({message: "User o pass incorrecto"}, {
            status: 401
        });
    }
};