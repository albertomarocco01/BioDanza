import "server-only";
import { z } from "zod";

const ServerEnv = z.object({
  SANITY_PROJECT_ID: z.string().min(1, "Missing SANITY_PROJECT_ID"),
  SANITY_DATASET: z.string().min(1, "Missing SANITY_DATASET"),
  SANITY_API_VERSION: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "SANITY_API_VERSION must be YYYY-MM-DD"),
  SANITY_API_READ_TOKEN: z.string().optional(),
});

function loadServerEnv() {
  const parsed = ServerEnv.safeParse(process.env);
  if (!parsed.success) {
    // Messaggio leggibile a console
    console.error("❌ Invalid server env:", parsed.error.format());
    throw new Error(
      "Environment invalid. Check .env.local or Vercel Project Settings. See server logs for details."
    );
  }
  return parsed.data;
}

export const env = { server: loadServerEnv() };
