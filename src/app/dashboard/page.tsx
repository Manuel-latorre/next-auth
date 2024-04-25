import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


export default function DashboardPage(){

    const {userId} = auth();
    if(userId){
        redirect('/dashboard');
    }

    return(
        <div>
            dashboard
        </div>
    )
}