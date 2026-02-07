import { describe, it, expect } from 'vitest';
import { validateUserAge } from './logic';

describe('User Logic', () => {
    it('should fail if age is under 18', () => {
        const result = validateUserAge(16);
        expect(result.ok).toBe(false);
    });
});