import LoginForm from "@/components/LoginForm";
import { createServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {

  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  // if(user) {
  //   redirect('/dashboard');
  // }

  return (
    <LoginForm/>
  );
}
