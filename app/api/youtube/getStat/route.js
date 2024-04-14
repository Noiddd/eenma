import SupabaseServer from "@/lib/supabase/SupabaseServer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = SupabaseServer({ cookies });

  let { data: labels, error } = await supabase
    .from("sales_labels_selected")
    .select(
      `*,labels(
      color, value,label
    )`
    )
    .order("created_at", { ascending: false });

  // .order("label", {
  //   referencedTable: "labels",
  //   ascending: false,
  // });

  return NextResponse.json(labels);
}
