import { createRoot } from 'react-dom/client';
import Hello from './Hello';

const container = document.getElementById('root');
if (container != null) {
    const root = createRoot(container);
    root.render(<Hello />);
} else {
    // Page won't really load
}

export default function sum(a: number, b: number): number {
    return a + b;
}
