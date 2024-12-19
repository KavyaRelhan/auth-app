import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const response = NextResponse.json({
            message : "Loggedout successfully",
            success:true
        })

        response.cookies.set("token","",{expires:new Date(0)})
        return response;
    }catch(error:any){
        return NextResponse.json({error: error.message},{status:500});
    }
}