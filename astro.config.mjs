// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),
  integrations: [
    starlight({
      title: "OpenClaw 实战手册",
      description: "OpenClaw practical playbook",
      customCss: ["./src/styles/mintlify.css"],
      locales: {
        root: { label: "中文", lang: "zh-CN" },
        en: { label: "English", lang: "en" },
      },
      defaultLocale: "root",
      sidebar: [
        { label: "首页", link: "/" },
        { label: "架构篇", link: "/architecture/" },
        { label: "踩坑手册", link: "/debug-playbook/" },
        { label: "实战菜谱", link: "/workflows/" },
        { label: "观点篇", link: "/opinions/" },
        { label: "关于", link: "/about/" },
      ],
    }),
  ],
});
