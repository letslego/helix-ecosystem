# Helix Ecosystem

The open stack for building durable AI agents — filesystem-first, local-first, provider-agnostic.

**Site:** https://letslego.github.io/helix-ecosystem/

## Packages

| Repo | npm | Role |
| --- | --- | --- |
| [helix](https://github.com/letslego/helix) | `@letslego/helix` | Agent framework (orchestrator) |
| [helix-workflow](https://github.com/letslego/helix-workflow) | `@letslego/helix-workflow` | Durable workflows — step replay, park & resume |
| [helix-gateway](https://github.com/letslego/helix-gateway) | `@letslego/helix-gateway` | AI Gateway — routing, fallbacks, providers |
| [helix-sandbox](https://github.com/letslego/helix-sandbox) | `@letslego/helix-sandbox` | Isolated compute — FS, glob, grep, bash |
| [helix-connect](https://github.com/letslego/helix-connect) | `@letslego/helix-connect` | Connect — credential-brokered MCP/OpenAPI |
| [helix-channels](https://github.com/letslego/helix-channels) | `@letslego/helix-channels` | Channels — HTTP, web, Slack, Discord |
| [helix-templates](https://github.com/letslego/helix-templates) | — | Starter agent templates |
| [helix-sdk](https://github.com/letslego/helix-sdk) | `@letslego/helix-sdk` | TypeScript client for `/helix/v1` |
| [helix-sdk-python](https://github.com/letslego/helix-sdk-python) | `letslego-helix` | Python client for `/helix/v1` |
| [helix-sdk-go](https://github.com/letslego/helix-sdk-go) | `github.com/letslego/helix-sdk-go` | Go client for `/helix/v1` |

## How it maps

Like a full agent platform, split into inspectable pieces:

```text
                 ┌──────────── Helix (framework) ────────────┐
                 │  instructions · tools · skills · policies │
                 └───────┬──────────┬──────────┬─────────────┘
         ┌───────────────┼──────────┼──────────┼──────────────┐
         ▼               ▼          ▼          ▼              ▼
   helix-workflow  helix-gateway  sandbox   connect      channels
    (durability)    (models)     (compute)  (auth)      (delivery)
```

## Quick start

```bash
npx @letslego/helix init my-agent
cd my-agent && npm install
npx helix console
```

Or compose packages directly:

```bash
npm install @letslego/helix-workflow @letslego/helix-gateway @letslego/helix-sandbox @letslego/helix-connect @letslego/helix-channels
```

## Client SDKs

Talk to a running console (`npx helix console`) from any language:

```bash
npm install @letslego/helix-sdk
pip install letslego-helix
go get github.com/letslego/helix-sdk-go
```

```ts
import { HelixClient } from "@letslego/helix-sdk";
const helix = new HelixClient({ baseUrl: "http://127.0.0.1:8787" });
const turn = await helix.chat("Plan a weekend in Paris", undefined, { autoApprove: true });
```

## License

Apache-2.0 © LetsLego
