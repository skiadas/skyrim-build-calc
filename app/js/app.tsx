/* eslint-disable no-console */
import { createRoot } from 'react-dom/client';
import Main from './Main';

const container = document.getElementById('root');

if (container != null) {
    const root = createRoot(container);
    root.render(<Main />);
} else {
    // Page won't really load
}
