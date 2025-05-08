import { CommitsGrid } from "@/components/commits-grid"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <CommitsGrid text="404" />
            <p className="text-2xl">The page you are looking for does not exist.</p>
            <Button variant="outline" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </div>
    );
}
