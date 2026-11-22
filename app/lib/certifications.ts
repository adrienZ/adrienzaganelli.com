export interface Certification {
	id: string;
	title: string;
	issuer: string;
	/** Short topic label shown on some variants */
	topic: string;
	/** Iconify name of the brand logo */
	icon: string;
	/** Public verification URL */
	url: string;
}

export const certifications: Certification[] = [
	{
		id: "vuejs-developer",
		title: "Vue.js Developers Certification",
		issuer: "Certificates.dev",
		icon: "i-logos-vue",
		topic: "Vue.js",
		url: "https://certificates.dev/vuejs/certificates/9c44c78e-9b94-4c50-83e0-39255c839a4c",
	},
	{
		id: "claude-101",
		title: "Claude 101",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "Fundamentals",
		url: "https://verify.skilljar.com/c/23zun948eb2d",
	},
	{
		id: "claude-platform-101",
		title: "Claude Platform 101",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "Platform",
		url: "https://verify.skilljar.com/c/isntim5v5fm6",
	},
	{
		id: "claude-code-in-action",
		title: "Claude Code in Action",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "Claude Code",
		url: "https://verify.skilljar.com/c/qgvh7kx9bqyt",
	},
	{
		id: "building-with-the-claude-api",
		title: "Building with the Claude API",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "API",
		url: "https://verify.skilljar.com/c/wo7663yaicb4",
	},
	{
		id: "introduction-to-mcp",
		title: "Introduction to MCP",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "MCP",
		url: "https://verify.skilljar.com/c/tivpymejgy25",
	},
	{
		id: "introduction-to-agent-skills",
		title: "Introduction to Agent Skills",
		issuer: "Anthropic Academy",
		icon: "i-logos-claude-icon",
		topic: "Agent Skills",
		url: "https://verify.skilljar.com/c/mabrah95hcpg",
	},
];
