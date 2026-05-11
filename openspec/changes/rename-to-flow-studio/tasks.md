## 1. Package Identity

- [x] 1.1 Update `package.json`: `name` → `@avenga/flow-studio`
- [x] 1.2 Update `package.json`: `bin` key from `"openspec"` → `"flow-studio"`, value from `./bin/openspec.js` → `./bin/flow-studio.js`
- [x] 1.3 Update `package.json`: `description`, `keywords`, `author`, `homepage`, `repository` to reflect new name
- [x] 1.4 Update `package.json` `scripts.dev:cli` to reference `bin/flow-studio.js`

## 2. Binary File

- [x] 2.1 Rename `bin/openspec.js` → `bin/flow-studio.js`
- [x] 2.2 Update any internal references inside the bin file if present

## 3. Core Constants (`src/core/config.ts`)

- [x] 3.1 Rename `OPENSPEC_DIR_NAME` constant to `FLOW_STUDIO_DIR_NAME`, value `'openspec'` → `'flow-studio'`
- [x] 3.2 Rename `OPENSPEC_MARKERS` to `FLOW_STUDIO_MARKERS`; update `start`/`end` values to `FLOW_STUDIO:START` / `FLOW_STUDIO:END`
- [x] 3.3 Update all import sites that reference `OPENSPEC_DIR_NAME` or `OPENSPEC_MARKERS` to use new names

## 4. Workflow-to-Skill Mapping

- [x] 4.1 In `src/core/init.ts` `WORKFLOW_TO_SKILL_DIR` map: rename all `openspec-*` values to `flow-studio-*`
- [x] 4.2 In `src/core/profile-sync-drift.ts` `WORKFLOW_TO_SKILL_DIR` map: rename all `openspec-*` values to `flow-studio-*`

## 5. Legacy Cleanup Patterns (`src/core/legacy-cleanup.ts`)

- [x] 5.1 Update all `openspec-*.md` glob patterns to `flow-studio-*.md`
- [x] 5.2 Update all `opsx-*.md` glob patterns to `fwst-*.md`
- [x] 5.3 Retain old `openspec-*` and `opsx-*` patterns alongside new ones so old installations are cleaned up on re-init
- [x] 5.4 Update `.claude/commands/openspec/` and `.claude/commands/opsx/` directory patterns to include `.claude/commands/fwst/`
- [x] 5.5 Update cleanup summary messages: replace "replaced by /opsx:*" → "replaced by /fwst:*"

## 6. User-Facing Output Strings

- [x] 6.1 `src/ui/welcome-screen.ts`: replace all `/opsx:*` references with `/fwst:*`
- [x] 6.2 `src/core/init.ts`: replace all `openspec` CLI strings → `flow-studio`, `/opsx:*` → `/fwst:*`
- [x] 6.3 `src/core/update.ts`: replace all `openspec` CLI strings → `flow-studio`, `/opsx:*` → `/fwst:*`
- [x] 6.4 `src/core/migration.ts`: replace all `openspec` CLI strings → `flow-studio`, `/opsx:*` → `/fwst:*`
- [x] 6.5 `src/core/archive.ts`: replace all `openspec` CLI strings → `flow-studio`
- [x] 6.6 `src/core/global-config.ts`: replace all `openspec` CLI strings → `flow-studio`
- [x] 6.7 `src/core/view.ts`: replace all `openspec` CLI strings → `flow-studio`
- [x] 6.8 `src/core/list.ts`: replace all `openspec` CLI strings → `flow-studio`

## 7. Template Content (`src/core/templates/`)

- [x] 7.1 Update all `/opsx:*` references in workflow template files to `/fwst:*`
- [x] 7.2 Update all `openspec` CLI command references in template files to `flow-studio`
- [x] 7.3 Update all `openspec/changes/`, `openspec/specs/` path strings in templates to `flow-studio/`

## 8. Shell Completion Generators

- [x] 8.1 `src/core/completions/templates/zsh-templates.ts`: replace `openspec` binary references with `flow-studio`; update `OPENSPEC:START/END` markers to `FLOW_STUDIO:START/END`
- [x] 8.2 `src/core/completions/templates/bash-templates.ts`: same replacements
- [x] 8.3 `src/core/completions/templates/fish-templates.ts`: replace `openspec` with `flow-studio` in `complete -c` statements
- [x] 8.4 `src/core/completions/generators/zsh-generator.ts`: replace `openspec` binary references with `flow-studio`

## 9. Parser Format Identifiers

- [x] 9.1 `src/core/parsers/change-parser.ts`: update `format: 'openspec'` → `format: 'flow-studio'` and `format: 'openspec-change'` → `format: 'flow-studio-change'`
- [x] 9.2 `src/core/parsers/spec-structure.ts`: update any `openspec` format identifiers

## 10. Workspace References

- [x] 10.1 Replace all `.openspec-workspace` references → `.flow-studio-workspace` across source files
- [x] 10.2 Replace all `.openspec.yaml` references → `.flow-studio.yaml` across source files
- [x] 10.3 Replace all `.openspec-test-` references → `.flow-studio-test-`

## 11. Remaining Source Files

- [ ] 11.1 `src/core/specs-apply.ts`: update `openspec/specs/` path references
- [ ] 11.2 `src/core/project-config.ts`: update any `openspec` config path references
- [ ] 11.3 Grep for any remaining `openspec` or `opsx` string literals in `src/` and update

## 12. Documentation

- [ ] 12.1 Update `README.md`: replace all `openspec` → `flow-studio` and `/opsx:*` → `/fwst:*` references
- [ ] 12.2 Update `AGENTS.md` if it references `openspec` CLI or `/opsx:*` commands

## 13. Verification

- [ ] 13.1 Run `pnpm build` and confirm no TypeScript errors
- [ ] 13.2 Run `pnpm test` and confirm all tests pass
- [ ] 13.3 Grep `src/` for remaining `openspec` or `opsx` literals and confirm only intentional ones remain (e.g., legacy cleanup patterns that intentionally reference old names)
- [ ] 13.4 Manually run `node bin/flow-studio.js --help` and confirm CLI works under new name
