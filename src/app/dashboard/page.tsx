
import DashboardForm from "@/components/DashboardForm";
import { createServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const supabase = createServerClient();
    const user = await supabase.auth.getUser();

    // if (user.error) {
    //     redirect('/');
    // }

    return (
        <DashboardForm/>
    )

}