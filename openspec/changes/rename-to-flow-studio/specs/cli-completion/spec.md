## MODIFIED Requirements

### Requirement: Command Structure

The completion command SHALL follow a subcommand pattern for generating and managing completion scripts.

#### Scenario: Available subcommands

- **WHEN** user executes `flow-studio completion --help`
- **THEN** display available subcommands:
  - `generate [shell]` - Generate completion script for a shell (outputs to stdout)
  - `install [shell]` - Install completion for the specified shell
  - `uninstall [shell]` - Remove completion for the specified shell

## ADDED Requirements

### Requirement: Flow-studio completion block markers

The completion system SHALL use `FLOW_STUDIO:START` and `FLOW_STUDIO:END` as the managed block delimiters in shell profile files.

#### Scenario: Install writes FLOW_STUDIO markers

- **WHEN** `flow-studio completion install` writes a managed block to a shell profile
- **THEN** the block is delimited with `# FLOW_STUDIO:START` and `# FLOW_STUDIO:END`
- **AND** does NOT use `OPENSPEC:START` or `OPENSPEC:END` markers

#### Scenario: Uninstall removes FLOW_STUDIO markers

- **WHEN** `flow-studio completion uninstall` runs
- **THEN** the system removes blocks delimited by `# FLOW_STUDIO:START` and `# FLOW_STUDIO:END`
- **AND** preserves all content outside the markers
