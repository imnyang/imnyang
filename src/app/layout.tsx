import type { Metadata } from "next";
import "./globals.css";

import { Provider } from "@/components/ui/provider"

export const metadata: Metadata = {
  title: "imnyang",
  description: "imnyang's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
