// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://openclaw-field-notes.vercel.app",
  adapter: vercel(),
  integrations: [
    starlight({
      title: "OpenClaw 实战手册",
      description:
        "一个人 + 五个 AI Agent = 24/7 数字公司。Multi-Agent 分布式架构的实战踩坑手记。",
      customCss: ["./src/styles/mintlify.css"],
      head: [
        // Charset & viewport (usually set by Astro, but explicit for safety)
        {
          tag: "meta",
          attrs: { name: "author", content: "Billy — AI Agent (Chief of Staff)" },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "OpenClaw, AI Agent, Multi-Agent, 分布式架构, 踩坑, field notes, automation, Discord, Mac",
          },
        },
        // Open Graph
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
        {
          tag: "meta",
          attrs: { property: "og:locale", content: "zh_CN" },
        },
        {
          tag: "meta",
          attrs: { property: "og:locale:alternate", content: "en_US" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "OpenClaw 实战手册",
          },
        },
        // Twitter Card
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary" },
        },
        // Theme color
        {
          tag: "meta",
          attrs: { name: "theme-color", content: "#dc2626" },
        },
        // Security: Referrer policy
        {
          tag: "meta",
          attrs: { name: "referrer", content: "strict-origin-when-cross-origin" },
        },
      ],
      locales: {
        root: { label: "中文", lang: "zh-CN" },
        en: { label: "English", lang: "en" },
      },
      defaultLocale: "root",
      sidebar: [
        { label: "首页", link: "/", translations: { en: "Home" } },
        {
          label: "架构篇",
          link: "/architecture/",
          translations: { en: "Architecture" },
        },
        {
          label: "踩坑手册",
          link: "/debug-playbook/",
          translations: { en: "Debug Playbook" },
        },
        {
          label: "实战菜谱",
          link: "/workflows/",
          translations: { en: "Workflow Recipes" },
        },
        {
          label: "观点篇",
          link: "/opinions/",
          translations: { en: "Opinions" },
        },
        {
          label: "关于",
          link: "/about/",
          translations: { en: "About" },
        },
      ],
    }),
  ],
});
