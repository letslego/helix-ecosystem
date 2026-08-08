const packages = [
  {
    name: "helix",
    pkg: "@letslego/helix",
    desc: "Filesystem-first agent framework — orchestrates the whole stack.",
    url: "https://github.com/letslego/helix",
  },
  {
    name: "helix-workflow",
    pkg: "@letslego/helix-workflow",
    desc: "Durable workflows with step replay, park, and resume.",
    url: "https://github.com/letslego/helix-workflow",
  },
  {
    name: "helix-gateway",
    pkg: "@letslego/helix-gateway",
    desc: "AI Gateway: intent routing, fallbacks, provider adapters.",
    url: "https://github.com/letslego/helix-gateway",
  },
  {
    name: "helix-sandbox",
    pkg: "@letslego/helix-sandbox",
    desc: "Isolated compute — filesystem, glob, grep, allowlisted bash.",
    url: "https://github.com/letslego/helix-sandbox",
  },
  {
    name: "helix-connect",
    pkg: "@letslego/helix-connect",
    desc: "Credential brokering for MCP/OpenAPI. Secrets stay out of prompts.",
    url: "https://github.com/letslego/helix-connect",
  },
  {
    name: "helix-channels",
    pkg: "@letslego/helix-channels",
    desc: "Delivery surfaces — HTTP, web console, Slack, Discord.",
    url: "https://github.com/letslego/helix-channels",
  },
  {
    name: "helix-templates",
    pkg: "templates",
    desc: "Starter agents and examples you can clone.",
    url: "https://github.com/letslego/helix-templates",
  },
];

document.getElementById("grid").innerHTML = packages
  .map(
    (p) => `<a class="card" href="${p.url}" target="_blank" rel="noreferrer">
      <strong>${p.name}</strong>
      <span>${p.desc}</span>
      <em>${p.pkg}</em>
    </a>`,
  )
  .join("");
