import requests

API_KEY = "dg_live_..."  # replace with your key

res = requests.post(
    "https://driftgentic.com/functions/v1/validate",
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "tool": "stripe/create_customer",
        "payload": {
            "email": "test@example.com"
        }
    }
)

result = res.json()

if not result.get("valid"):
    print("Validation failed:", result.get("errors"))
else:
    print("Validation passed")
