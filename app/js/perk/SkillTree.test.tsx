/**
 * @jest-environment jsdom
 */

import { createRoot, Root } from 'react-dom/client';
import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';

import SkillTree from './SkillTree';

function prepareRoot(): {
    root: Root;
    container: HTMLElement;
} {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    return { root, container };
}
describe('Perk tree', () => {
    it('is based on skill settings', async () => {
        const { root, container } = prepareRoot();
        act(() => {
            root.render(
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                <SkillTree name="aName" minLevel={15} level={20} myHandler={(): void => {}} />
            );
        });
        expect(container.textContent).toContain('aName');
        const input = await screen.getByLabelText('aName');
        expect(input).toHaveAttribute('min', '15');
        expect(input).toHaveAttribute('max', '100');
        expect(input).toHaveValue(20);
        act(() => root.unmount());
    });
    it('calls callback on input changes', async () => {
        const { root, container } = prepareRoot();
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const spy = jest.fn(() => {});
        act(() => {
            const skillTree = <SkillTree name="aName2" minLevel={15} level={20} myHandler={spy} />;
            root.render(skillTree);
        });
        await screen.findByLabelText('aName2');
        await act(() => {
            const input = container.querySelector('input');
            if (input != null) {
                fireEvent.change(input, { target: { value: 30 } });
            }
        });
        expect(spy).toHaveBeenCalled();
        act(() => root.unmount());
    });
});
