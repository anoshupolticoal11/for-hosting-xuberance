import { supabaseAdmin } from "./supabase";

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
}

export async function rateLimit(
  key: string,
  maxHits: number,
  windowMs: number
): Promise<RateLimitResult> {
  try {
    const now = new Date();
    
    await supabaseAdmin
      .from("rate_limits")
      .delete()
      .lt("expiry", now.toISOString());

    const { data: record, error } = await supabaseAdmin
      .from("rate_limits")
      .select("*")
      .eq("key", key)
      .maybeSingle();

    if (error) {
      console.error("Rate limit query error:", error);
      return { success: true, limit: maxHits, remaining: maxHits };
    }

    if (!record) {
      const expiry = new Date(Date.now() + windowMs);
      const { error: insertError } = await supabaseAdmin
        .from("rate_limits")
        .insert({
          key,
          hits: 1,
          expiry: expiry.toISOString(),
        });

      if (insertError) {
        console.error("Rate limit insert error:", insertError);
      }
      return { success: true, limit: maxHits, remaining: maxHits - 1 };
    }

    if (record.hits >= maxHits) {
      return { success: false, limit: maxHits, remaining: 0 };
    }

    const { error: updateError } = await supabaseAdmin
      .from("rate_limits")
      .update({ hits: record.hits + 1 })
      .eq("key", key);

    if (updateError) {
      console.error("Rate limit update error:", updateError);
    }

    return { success: true, limit: maxHits, remaining: maxHits - (record.hits + 1) };
  } catch (e) {
    console.error("Rate limiting exception:", e);
    return { success: true, limit: maxHits, remaining: maxHits };
  }
}

