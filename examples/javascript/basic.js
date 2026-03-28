examples/javascript/basic.js
const API_KEY = "dg_live_..." // replace with your key

async function validateToolCall() {
  const res = await fetch("https://driftgentic.com/functions/v1/validate", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
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

  if (!result.valid) {
    console.error("Validation failed:", result.errors)
  } else {
    console.log("Validation
