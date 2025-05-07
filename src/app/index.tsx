import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Page } from "./page";
import RedirectTimeline from "./utils/RedirectTimeline";
import NotFound from "./utils/NotFound";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/timeline" element={<RedirectTimeline />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}