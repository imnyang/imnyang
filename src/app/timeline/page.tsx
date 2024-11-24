import Link from 'next/link';
import Timeline from '../components/Timeline';

export default function Timeline_Page() {
    return (
        <div style={{ display: 'flex', overflow: 'auto', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', width: '100vw', height: '100vh', background: '#101020' }}>
            <div style={{height: '70%', overflow: 'auto'}}>
                <Link href='/'>🏠 Back</Link>
                <h1>Timeline</h1>
                <Timeline />
            </div>
        </div>
    );
}