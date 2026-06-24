import { NextResponse } from "next/server";
import { getSession, clearSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ success: false, session: null });
    }

    // Verify the account still exists in the database
    // This handles the case where an admin deletes an account while it's logged in
    const { data: account, error } = await supabaseAdmin
      .from("accounts")
      .select("id")
      .eq("id", session.id)
      .single();

    if (error || !account) {
      // Account no longer exists — clear the stale session cookie
      await clearSession();
      return NextResponse.json({ success: false, session: null });
    }

    return NextResponse.json({ success: true, session });
  } catch (e) {
    console.error("Session API Error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
