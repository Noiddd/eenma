"use server";

import SupabaseServer from "@/lib/supabase/SupabaseServer";

export default async function useUserSession() {
  const supabase = await SupabaseServer();

  return supabase.auth.getUser();
}
