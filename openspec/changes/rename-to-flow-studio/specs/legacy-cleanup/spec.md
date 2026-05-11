## MODIFIED Requirements

### Requirement: Legacy artifact detection

The system SHALL detect legacy OpenSpec and flow-studio artifacts from previous init versions.

#### Scenario: Detecting legacy config files

- **WHEN** running `flow-studio init` on an existing project
- **THEN** the system SHALL check for config files with OpenSpec or flow-studio markers:
  - `CLAUDE.md`
  - `.cursorrules`
  - `.windsurfrules`
  - `.clinerules`
  - `.kilocode_rules`
  - `.github/copilot-instructions.md`
  - `.amazonq/instructions.md`
  - `CODEBUDDY.md`
  - `IFLOW.md`
  - And all other tool config files from the legacy ToolRegistry

#### Scenario: Detecting legacy slash command directories

- **WHEN** running `flow-studio init` on an existing project
- **THEN** the system SHALL check for old slash command directories and files:
  - `.claude/commands/openspec/`
  - `.claude/commands/opsx/` (old naming)
  - `.claude/commands/fwst/` (current naming, for re-init scenarios)
  - `flow-studio-*.md` equivalents for all tools in the legacy SlashCommandRegistry
  - `openspec-*.md` equivalents for all tools (cleanup of old naming)
  - `opsx-*.md` equivalents for all tools (cleanup of old naming)
  - `fwst-*.md` equivalents for all tools (cleanup of current naming)

#### Scenario: Detecting legacy flow-studio structure files

- **WHEN** running `flow-studio init` on an existing project
- **THEN** the system SHALL check for:
  - `flow-studio/AGENTS.md`
  - `openspec/AGENTS.md` (old naming)
  - `flow-studio/project.md` (for migration messaging only, not deleted)
  - `openspec/project.md` (old naming, for migration messaging only)
  - Root `AGENTS.md` with flow-studio or OpenSpec markers

### Requirement: Cleanup reporting

The system SHALL report what was cleaned up.

#### Scenario: Displaying cleanup summary

- **WHEN** legacy cleanup completes
- **THEN** the system SHALL display a summary section:
  ```
  Cleaned up legacy files:
    ✓ Removed flow-studio markers from CLAUDE.md
    ✓ Removed .claude/commands/fwst/ (replaced by /fwst:*)
    ✓ Removed flow-studio/AGENTS.md (no longer needed)
  ```
- **AND IF** `flow-studio/project.md` exists
- **THEN** the system SHALL display a separate migration section:
  ```
  Manual migration needed:
    → flow-studio/project.md still exists
      Move useful content to config.yaml's "context:" field, then delete
  ```

#### Scenario: No legacy detected

- **WHEN** no legacy artifacts are found
- **THEN** the system SHALL NOT display the cleanup section
- **AND** proceed directly with skill setup
