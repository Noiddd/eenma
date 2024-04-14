"use server";

import SupabaseServer from "@/lib/supabase/SupabaseServer";

export default async function useUser() {
  const supabase = await SupabaseServer();

  return supabase.auth.getUser();
}
