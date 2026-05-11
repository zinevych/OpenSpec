## Context

The codebase currently uses two identifiers throughout: `openspec` (the system/directory name) and `opsx` (the slash command prefix). Both appear in:

- Package metadata (`package.json`)
- The CLI binary entrypoint (`bin/openspec.js`)
- A central config module (`src/core/config.ts`) that exports shared constants used across the codebase
- Two workflow-to-skill mapping objects in `init.ts` and `profile-sync-drift.ts`
- Template strings embedded in `src/core/templates/` that are written into user projects
- User-facing output strings in `welcome-screen.ts`, `update.ts`, `migration.ts`, `init.ts`
- Legacy cleanup glob patterns in `legacy-cleanup.ts`
- Format identifier strings in `change-parser.ts`
- Shell completion generator templates referencing the binary name

The `.claude/` directory and the `openspec/` data directory in this project are explicitly excluded from this rename.

## Goals / Non-Goals

**Goals:**
- Rename all identifiers, strings, file names, and constants from `openspec`→`flow-studio` and `opsx`→`fwst` within the project source
- Update the npm package identity to `@avenga/flow-studio`
- Rename the CLI binary to `flow-studio`
- Keep the rename mechanical — no behavioral or structural changes

**Non-Goals:**
- Changing `.claude/` skills or commands in this repository
- Renaming the `openspec/` data directory in this project
- Adding migration tooling for existing projects (separate future change)
- Updating external documentation, changelogs, or GitHub release notes

## Decisions

**Single source of truth for names via constants**

All renamed identifiers (`FLOW_STUDIO_DIR_NAME`, `FLOW_STUDIO_MARKERS`, `WORKFLOW_TO_SKILL_DIR` values) will be defined in `src/core/config.ts` and imported everywhere they're needed. This is the existing pattern — we extend it, not replace it.

*Alternative considered*: Inline the strings at each usage site. Rejected — harder to maintain and violates the existing convention.

**Rename `bin/openspec.js` → `bin/flow-studio.js`**

The `package.json` `bin` field maps the CLI name to a file. Both must change together. The file is a thin shim, so the rename is purely mechanical.

**Legacy cleanup patterns: add new, keep old**

`legacy-cleanup.ts` currently matches `openspec-*` and `opsx-*` file patterns to remove stale installations. After the rename, newly generated files will be named `flow-studio-*` and `fwst-*`. The cleanup patterns must be updated to target the new names. Old `openspec-*`/`opsx-*` patterns should be retained so that running `flow-studio init` on an existing project cleans up the old-named files.

**Format identifiers are internal, but still renamed**

`'openspec'` and `'openspec-change'` are used as format discriminators in `change-parser.ts`. They are not user-visible, but renaming them to `'flow-studio'` and `'flow-studio-change'` keeps the codebase consistent. No external consumers depend on these strings.

**Shell completion markers renamed**

The `OPENSPEC:START` / `OPENSPEC:END` block markers are written into users' shell profile files. Renaming them to `FLOW_STUDIO:START` / `FLOW_STUDIO:END` means the tool will no longer recognize old markers for removal. This is acceptable for now; migration tooling is out of scope.

## Risks / Trade-offs

- [Breaking change for existing installs] Projects using the old `openspec` CLI or `openspec/` directory will not automatically work with `flow-studio`. → Accepted; migration tooling is a separate future change.
- [Shell completion orphan] Old `OPENSPEC:START…END` blocks in user shell profiles won't be removed by `flow-studio completions uninstall`. → Mitigated by retaining old patterns in legacy-cleanup; full fix in a future migration change.
- [Wide diff] ~20 source files change, increasing review surface. → Mitigated by the purely mechanical nature of the rename — no logic changes, only string/identifier substitutions.
