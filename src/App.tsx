import { Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider"

import Home from "./routes/Home";
import Timeline from "./routes/Timeline";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </ThemeProvider>
  )
}