/**
 * Static template strings for Bash completion scripts.
 * These are Bash-specific helper functions that never change.
 */

export const BASH_DYNAMIC_HELPERS = `# Dynamic completion helpers

_flow_studio_complete_changes() {
  local changes
  changes=$(flow-studio __complete changes 2>/dev/null | cut -f1)
  COMPREPLY=($(compgen -W "$changes" -- "$cur"))
}

_flow_studio_complete_specs() {
  local specs
  specs=$(flow-studio __complete specs 2>/dev/null | cut -f1)
  COMPREPLY=($(compgen -W "$specs" -- "$cur"))
}

_flow_studio_complete_items() {
  local items
  items=$(flow-studio __complete changes 2>/dev/null | cut -f1; flow-studio __complete specs 2>/dev/null | cut -f1)
  COMPREPLY=($(compgen -W "$items" -- "$cur"))
}

_flow_studio_complete_schemas() {
  local schemas
  schemas=$(flow-studio __complete schemas 2>/dev/null | cut -f1)
  COMPREPLY=($(compgen -W "$schemas" -- "$cur"))
}`;
