import { z } from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3004),

  DATABASE_URL: z.string().url(),

  FIREBASE_PROJECT_ID: z.string(),

  FIREBASE_CLIENT_EMAIL: z.string().email(),

  FIREBASE_PRIVATE_KEY: z.string(),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}
