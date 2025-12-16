import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "stocks-gravity", // changed from signalist
  ai: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY!,
    },
  },
});
