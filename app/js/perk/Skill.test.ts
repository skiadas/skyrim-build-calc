import Skill from './Skill';
describe('Skills', () => {
    it('have computed XP based on Start Level', () => {
        expect(new Skill('alteration', 3, 0).grantedXp()).toEqual(1 + 2 + 3);
        expect(new Skill('alteration', 20, 15).grantedXp()).toEqual(16 + 17 + 18 + 19 + 20);
        expect(new Skill('alteration', 12, 15).grantedXp()).toEqual(0);
    });
});
