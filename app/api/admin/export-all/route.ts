import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getSession } from "@/lib/session";

export async function GET() {
  try {
    const session = await getSession();
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch all member accounts with their registrations
    const { data: accountsWithRegistrations, error } = await supabaseAdmin
      .from("accounts")
      .select(`
        id,
        username,
        registrations (
          id,
          event_title,
          participants,
          created_at
        )
      `)
      .eq("role", "member")
      .order("username", { ascending: true });

    if (error) {
      console.error("Error fetching all registrations for export:", error);
      return NextResponse.json(
        { error: "Failed to fetch registrations" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: accountsWithRegistrations });
  } catch (e) {
    console.error("Export All API Error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
