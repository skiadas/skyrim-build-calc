/* eslint-disable no-console */
import { createRoot } from 'react-dom/client';
import SkillTree from './perk/SkillTree';

const container = document.getElementById('root');

function myFunction(): void {
    console.log('Changed!');
}

if (container != null) {
    const root = createRoot(container);
    root.render(<SkillTree name="aName" minLevel={15} level={20} myHandler={myFunction} />);
} else {
    // Page won't really load
}
