import type { Route } from "./+types/timeline";
import React from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "암냥" },
    { name: "description", content: "Student Developer" },
  ];
}

export default function Timeline() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/#timeline");
  }, [navigate]);

  return (
    <h1>Redirecting</h1>
  );
}
