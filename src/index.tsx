import { serve } from "bun";
import index from "./index.html";
import serveStatic from "serve-static-bun";

// Parse command line arguments for port
const args = process.argv.slice(2);
const portArgIndex = args.findIndex(arg => arg === "--port");
const port = portArgIndex !== -1 && args[portArgIndex + 1] ? 
  parseInt(args[portArgIndex + 1]) : 3000;

const server = serve({
  development: {
    // New: enable console log streaming
    console: true,

    // Enable hot module reloading
    hmr: true,
  },
  port: port,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    "/timeline": Response.redirect("/#timeline"),
    "/ads.txt": new Response(
      "google.com, pub-4588517451789913, DIRECT, f08c47fec0942fa0",
      {
        headers: {
          "content-type": "text/plain",
        },
      },
    ),
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
