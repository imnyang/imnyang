import { useEffect } from "react";
import { useNavigate } from "react-router";
export default function RedirectTimeline() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/#timeline");
    }, [navigate]);

    return (<></>)
}