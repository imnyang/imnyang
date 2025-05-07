import { serve } from "bun";
import index from "./index.html";

// Parse command line arguments for port
const args = process.argv.slice(2);
const portArgIndex = args.findIndex(arg => arg === "--port");
const port = portArgIndex !== -1 && args[portArgIndex + 1] ? 
  parseInt(args[portArgIndex + 1]) : 3000;


const server = serve({
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

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.clear();
if (process.env.NODE_ENV !== "production") {
  console.log(`\x1b[45m Dev \x1b[0m\x1b[35m Bun v${Bun.version}\x1b[0m`);
} else {
  console.log(`\x1b[0m\x1b[35m Bun v${Bun.version}\x1b[0m`);
}
console.log(`\n\x1b[34m→ \x1b[35m${server.url}\x1b[0m`);

