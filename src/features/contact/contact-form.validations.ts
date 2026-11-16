import { z } from "zod";

export const schema = z.object({
  fullname: z.string().min(1, "Required"),
  email: z.string().min(11, "Required").email("Invalid e-mail format"),
  question: z.string().min(1, "Required"),
});

export type schema = z.infer<typeof schema>;
