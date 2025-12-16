import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "signalist", // changed from signalist
  ai: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY!,
    },
  },
});
