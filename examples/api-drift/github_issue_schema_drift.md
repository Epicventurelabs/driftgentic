# API Drift Example: GitHub Issue Creation

Most agent failures do not come from reasoning.

They come from contracts changing underneath the agent.

This example shows how API drift creates silent breakage and how Driftgentic catches it before execution.

---

## Scenario

An agent was built against an older contract for creating a GitHub issue.

It still sends this payload:

```json
{
  "tool": "github/create_issue",
  "payload": {
    "repo": "Epicventurelabs/driftgentic",
    "title": "Bug in validation response",
    "body": "The response shape changed unexpectedly.",
    "labels": "bug"
  }
}
