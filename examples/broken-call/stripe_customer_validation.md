# Broken Tool Call Example: Stripe Customer Creation

Most agent failures are not complex.

They are simple contract mismatches that break at runtime.

This example shows a real failure case and how Driftgentic catches it before execution.

---

## ❌ Broken payload

```json
{
  "tool": "stripe/create_customer",
  "payload": {
    "email": 12345
  }
}
