/**
 * Command Reference Utilities
 *
 * Utilities for transforming command references to tool-specific formats.
 */

/**
 * Transforms colon-based command references to hyphen-based format.
 * Converts `/fwst:` patterns to `/fwst-` for tools that use hyphen syntax.
 *
 * @param text - The text containing command references
 * @returns Text with command references transformed to hyphen format
 *
 * @example
 * transformToHyphenCommands('/fwst:new') // returns '/fwst-new'
 * transformToHyphenCommands('Use /fwst:apply to implement') // returns 'Use /fwst-apply to implement'
 */
export function transformToHyphenCommands(text: string): string {
  return text.replace(/\/fwst:/g, '/fwst-');
}
