import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    '/timeline': Response.redirect("/#timeline"),
    '/ads.txt': new Response("google.com, pub-4588517451789913, DIRECT, f08c47fec0942fa0", {
      headers: {
        "content-type": "text/plain",
      },
    }),
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
