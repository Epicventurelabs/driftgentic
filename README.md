# Driftgentic

Catch drift at the boundary before it breaks production.

Driftgentic validates AI agent tool calls against JSON Schema contracts at runtime, detects API drift, and tracks agent reliability before failures reach downstream systems.

## Why this exists

Most teams find out something broke after the agent runs.

Common failures:
- wrong parameters
- missing required fields
- type mismatches
- upstream API changes

Driftgentic catches those issues at the boundary before execution.

## What it does

- Runtime schema validation for tool calls
- API drift detection between runs
- Run-level observability and error tracking
- Schema registry with verified contracts
- Agent-first onboarding with no SDK required

## Quickstart

### 1. Self-onboar
