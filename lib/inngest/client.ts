import { Inngest } from "inngest";

export const inngest = new Inngest({
<<<<<<< HEAD
    id: 'signalist',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})
=======
  id: "signalist", // changed from signalist
  ai: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY!,
    },
  },
});
>>>>>>> 367871f79e6f6e7c6714602bee49b9af3f02f131
