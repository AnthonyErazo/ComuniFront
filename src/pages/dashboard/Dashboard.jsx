import { useState } from 'react';
import Sidebar from './components/Sidebar';

function Dashboard() {
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <Sidebar isSidebar={isSidebar} />
    )
}

export default Dashboard
