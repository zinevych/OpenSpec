import { describe, it, expect } from 'vitest';
import { transformToHyphenCommands } from '../../src/utils/command-references.js';

describe('transformToHyphenCommands', () => {
  describe('basic transformations', () => {
    it('should transform single command reference', () => {
      expect(transformToHyphenCommands('/fwst:new')).toBe('/fwst-new');
    });

    it('should transform multiple command references', () => {
      const input = '/fwst:new and /fwst:apply';
      const expected = '/fwst-new and /fwst-apply';
      expect(transformToHyphenCommands(input)).toBe(expected);
    });

    it('should transform command reference in context', () => {
      const input = 'Use /fwst:apply to implement tasks';
      const expected = 'Use /fwst-apply to implement tasks';
      expect(transformToHyphenCommands(input)).toBe(expected);
    });

    it('should handle backtick-quoted commands', () => {
      const input = 'Run `/fwst:continue` to proceed';
      const expected = 'Run `/fwst-continue` to proceed';
      expect(transformToHyphenCommands(input)).toBe(expected);
    });
  });

  describe('edge cases', () => {
    it('should return unchanged text with no command references', () => {
      const input = 'This is plain text without commands';
      expect(transformToHyphenCommands(input)).toBe(input);
    });

    it('should return empty string unchanged', () => {
      expect(transformToHyphenCommands('')).toBe('');
    });

    it('should not transform similar but non-matching patterns', () => {
      const input = '/ops:new opsx: /other:command';
      expect(transformToHyphenCommands(input)).toBe(input);
    });

    it('should handle multiple occurrences on same line', () => {
      const input = '/fwst:new /fwst:continue /fwst:apply';
      const expected = '/fwst-new /fwst-continue /fwst-apply';
      expect(transformToHyphenCommands(input)).toBe(expected);
    });
  });

  describe('multiline content', () => {
    it('should transform references across multiple lines', () => {
      const input = `Use /fwst:new to start
Then /fwst:continue to proceed
Finally /fwst:apply to implement`;
      const expected = `Use /fwst-new to start
Then /fwst-continue to proceed
Finally /fwst-apply to implement`;
      expect(transformToHyphenCommands(input)).toBe(expected);
    });
  });

  describe('all known commands', () => {
    const commands = [
      'new',
      'continue',
      'apply',
      'ff',
      'sync',
      'archive',
      'bulk-archive',
      'verify',
      'explore',
      'onboard',
    ];

    for (const cmd of commands) {
      it(`should transform /fwst:${cmd}`, () => {
        expect(transformToHyphenCommands(`/fwst:${cmd}`)).toBe(`/fwst-${cmd}`);
      });
    }
  });
});
