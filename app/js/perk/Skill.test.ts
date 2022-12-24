import {newSkill, grantedXp } from './Skill';
describe('Skills', () => {
    it('have computed XP based on Start Level', () => {
        expect(grantedXp(newSkill('alteration', 3, 0))).toEqual(1 + 2 + 3);
        expect(grantedXp(newSkill('alteration', 20, 15))).toEqual(16 + 17 + 18 + 19 + 20);
        expect(grantedXp(newSkill('alteration', 12, 15))).toEqual(0);
    });
});
