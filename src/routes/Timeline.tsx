import { useEffect } from "react";

export default function Timeline() {
    useEffect(() => {
        window.location.href = "/#timeline";
    }, []);

    return (
        <h1 className="w-full h-screen flex items-center justify-center">Redirecting</h1>
    )
}