## MODIFIED Requirements

### Requirement: Specs Sync Skill
The system SHALL provide a `/fwst:sync` skill that syncs delta specs from a change to the main specs.

#### Scenario: Sync delta specs to main specs
- **WHEN** agent executes `/fwst:sync` with a change name
- **THEN** the agent reads delta specs from `flow-studio/changes/<name>/specs/`
- **AND** reads corresponding main specs from `flow-studio/specs/`
- **AND** reconciles main specs to match what the deltas describe

#### Scenario: Idempotent operation
- **WHEN** agent executes `/fwst:sync` multiple times on the same change
- **THEN** the result is the same as running it once
- **AND** no duplicate requirements are created

#### Scenario: Change selection prompt
- **WHEN** agent executes `/fwst:sync` without specifying a change
- **THEN** the agent prompts user to select from available changes
- **AND** shows changes that have delta specs
