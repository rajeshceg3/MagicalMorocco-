# Verify MagicalMorocco-
Whispers of Morocco - cinematic static journey through Morocco.
## Launch
Any static file server from the repo root, e.g. python3 -m http.server.
## Doctor
`python3 .cursor/skills/verify-magical-morocco/verify.py`
## Drive
Syntax-checks every js/*.js with node --check, serves the static site, and renders it in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-magical-morocco/evidence.json`
## Cleanup
Static/production server terminated after the render.
## Known boundaries
Render smoke only; scene quality unverified.
