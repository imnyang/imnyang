import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Page } from "./page";
import NotFound from "./utils/NotFound";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function TimelineRedirect() {
  const navigate = useNavigate();
  useEffect(() => { navigate("/#timeline"); }, [navigate]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/timeline" element={<TimelineRedirect />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
