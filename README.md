# Driftgentic

Catch drift at the boundary before it breaks production.

Driftgentic validates AI agent tool calls against JSON Schema contracts at runtime, detects API drift, and tracks agent reliability before failures reach downstream systems.

---

## Why this exists

Most teams find out something broke after the agent runs.

Common failures:
- wrong parameters  
- missing required fields  
- type mismatches  
- upstream API changes  

Driftgentic catches those issues at the boundary before execution.

---

## What it does

- Runtime schema validation for tool calls  
- API drift detection between runs  
- Run-level observability and error tracking  
- Schema registry with verified contracts  
- Agent-first onboarding (no login, no SDK required)  

---

## Quickstart (30 seconds)

### 1. Self-onboard an agent

```bash
curl -X POST https://driftgentic.com/functions/v1/agent-onboard \
  -H "Content-Type: application/json" \
  -d '{"agent_identity": "my-agent/1.0.0"}'


Returns:

{
  "api_key": "dg_live_...",
  "credits": 100,
  "project_id": "uuid"
}

2. Validate a tool call
curl -X POST https://driftgentic.com/functions/v1/validate \
  -H "Authorization: Bearer dg_live_..." \
  -H "Content-Type: application/json" \
  -d '{
    "tool": "stripe/create_customer",
    "payload": {
      "email": "test@example.com"
    }
  }'

Example (JavaScript)
const res = await fetch("https://driftgentic.com/functions/v1/validate", {
  method: "POST",
  headers: {
    "Authorization": "Bearer dg_live_...",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    tool: "stripe/create_customer",
    payload: {
      email: "test@example.com"
    }
  })
})

const result = await res.json()
console.log(result)

Examples

Broken tool call validation

API drift example

These show real failure cases and how Driftgentic catches them before execution.

Discovery endpoints

Driftgentic is designed for agents to discover and use automatically:

/llms.txt

/agents.json

ai-plugin.json

/openapi

Docs

Site: https://driftgentic.com

API Docs: https://driftgentic.com/docs

OpenAPI: https://driftgentic.com/openapi

Who this is for

AI agent builders

teams using tool calling

developers integrating external APIs into agent workflows

What breaks agents

Agents don’t fail because they are “wrong.”

They fail because:

APIs change

schemas evolve

payloads drift over time

Driftgentic catches those failures at the boundary.
