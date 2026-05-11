## Why

The project is transitioning from the `openspec`/`opsx` brand to `flow-studio`/`fwst` under the `@avenga` npm scope. The current naming no longer reflects the product direction or the organization, and the rename establishes a consistent identity across the package, CLI, generated files, and AI workflow commands.

## What Changes

- **BREAKING** Package renamed from `@fission-ai/openspec` to `@avenga/flow-studio`
- **BREAKING** CLI binary renamed from `openspec` to `flow-studio`
- **BREAKING** Project data directory renamed from `openspec/` to `flow-studio/` (created by `flow-studio init`)
- **BREAKING** Change metadata file renamed from `.openspec.yaml` to `.flow-studio.yaml`
- **BREAKING** Workspace directory renamed from `.openspec-workspace/` to `.flow-studio-workspace/`
- **BREAKING** Shell completion markers renamed from `OPENSPEC:START/END` to `FLOW_STUDIO:START/END`
- **BREAKING** Generated skill names renamed from `openspec-*` to `flow-studio-*`
- **BREAKING** Slash command prefix renamed from `/opsx:*` to `/fwst:*`
- Format identifiers renamed from `openspec`/`openspec-change` to `flow-studio`/`flow-studio-change`
- All user-facing strings updated to reference `flow-studio` and `/fwst:*`
- Legacy cleanup patterns updated to match new naming conventions

## Capabilities

### New Capabilities

None — this change is a pure rename with no new product capabilities.

### Modified Capabilities

- `change-creation`: Directory name written by `init` changes from `openspec/` to `flow-studio/`; metadata file name changes from `.openspec.yaml` to `.flow-studio.yaml`
- `cli-spec`: All CLI command strings referencing `openspec` update to `flow-studio`
- `context-injection`: Shell completion markers (`OPENSPEC:START/END`) renamed to `FLOW_STUDIO:START/END`
- `specs-sync-skill`: Generated skill directory names change from `openspec-*` to `flow-studio-*`
- `legacy-cleanup`: Cleanup patterns updated to target new `flow-studio-*` and `fwst-*` filenames alongside old `openspec-*` and `opsx-*` patterns

## Impact

- **`package.json`**: `name`, `bin`, `keywords`, `description`, `author`, `homepage`, `repository`, `scripts.dev:cli`
- **`bin/openspec.js`**: File renamed to `bin/flow-studio.js`
- **`src/core/config.ts`**: Constants `OPENSPEC_DIR_NAME`, `OPENSPEC_MARKERS` renamed; string values updated
- **`src/core/init.ts`**, **`src/core/profile-sync-drift.ts`**: `WORKFLOW_TO_SKILL_DIR` map values updated; all user-facing strings updated
- **`src/core/legacy-cleanup.ts`**: All glob patterns updated to new naming
- **`src/core/templates/`**: All `/opsx:*` references updated to `/fwst:*`; `openspec` CLI references updated to `flow-studio`
- **`src/ui/welcome-screen.ts`**: Command display strings updated
- **`src/core/migration.ts`**, **`src/core/update.ts`**, **`src/core/archive.ts`**, and other core modules: User-facing strings updated
- **`src/core/parsers/change-parser.ts`**: Format identifiers updated
- **Docs**: README and any documentation referencing the old names
- No dependency changes; no schema changes; no behavioral changes
