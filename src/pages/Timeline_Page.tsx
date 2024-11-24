import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";

export default function Timeline_Page() {
    return (
        <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
            <Link to="/">Back</Link>
            <h1>Timeline</h1>
            <Timeline />
        </div>
    );
}
