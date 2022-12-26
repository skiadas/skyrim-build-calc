/**
 * @jest-environment jsdom
 */

import { createRoot, Root } from 'react-dom/client';
import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

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
        <Provider theme={defaultTheme}>
          <SkillTree name="aName" minLevel={15} level={20} onLevelChange={(): void => {}} />
        </Provider>
      );
    });
    expect(container.textContent).toContain('aName');
    const input = await screen.getByLabelText('aName');
    expect(input).toHaveValue('20');
    act(() => root.unmount());
  });
  it('calls callback on input changes', async () => {
    const { root, container } = prepareRoot();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const spy = jest.fn(() => {});
    act(() => {
      // const skillTree = <SkillTree name="aName2" minLevel={15} level={20} onLevelChange={spy} />;
      root.render(
        <Provider theme={defaultTheme}>
          <SkillTree name="aName2" minLevel={15} level={20} onLevelChange={spy} />
        </Provider>
      );
    });
    await screen.findByLabelText('aName2');
    await act(() => {
      const input = container.querySelector('input');
      if (input != null) {
        fireEvent.change(input, { target: { value: 30 } });
        fireEvent.blur(input);
      }
      expect(input).toHaveValue('30');
    });
    expect(spy).toHaveBeenCalled();
    act(() => root.unmount());
  });
});
