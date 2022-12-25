import { allPerks, simplePerks, mapEach, PerkList } from './PerkList';

describe('List of perks', () => {
    it('uses the perk enum values', () => {
        expect(allPerks).toContain('alchemy');
    });
});
describe('PerkList mapEach', () => {
    it('Works correctly', () => {
        const initPerks = simplePerks(() => 1);
        const newPerks = mapEach(initPerks, (x) => x + 1);
        expect(newPerks[PerkList.ALCHEMY]).toEqual(2);
    });
});
