import { type HeadConfig } from "vitepress";
import pkg from "vitepress/package.json";

export const head: HeadConfig[] = [
  [
    "meta",
    { name: "generator", content: `vitepress ${pkg.version}` },
    // <meta name="generator" content="vitepress x.x.x">
  ],
  [
    "meta",
    {
      name: "theme-color",
      media: "(prefers-color-scheme: dark)",
      content: `#202020`,
    },
    // <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#202020" />
  ],
  [
    "meta",
    { name: "apple-mobile-web-app-capable", content: `yes` },
    // <meta name="apple-mobile-web-app-capable" content="yes">
  ],
  [
    "meta",
    { name: "apple-mobile-web-app-status-bar-style", content: `yes` },
    // <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  ],
  [
    "meta",
    { property: "og:type", content: `website` },
    // <meta property="og:type" content="website">
  ],
  [
    "link",
    { rel: "manifest", href: `/manifest.webmanifest` },
    // <link rel="manifest" href="/manifest.webmanifest">
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/img/apple-touch-icon-180x180.png",
    },
    // <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon-180x180.png">
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/img/favicon-32x32.png",
    },
    // <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/img/favicon-16x16.png",
    },
    // <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
  ],
  [
    "link",
    { rel: "mask-icon", href: "/img/safari-pinned-tab.svg" },
    // <link rel="mask-icon" href="/img/safari-pinned-tab.svg">
  ],
  [
    "link",
    { rel: "shortcut icon", type: "image/ico", href: "/favicon.ico" },
    // <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  ],
  [
    "link",
    { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
    // <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  ],
  [
    "link",
    { rel: "dns-prefetch", href: "//lipk.oss-accelerate.aliyuncs.com" },
    // <link rel="dns-prefetch" href="//lipk.oss-accelerate.aliyuncs.com">
  ],
  [
    "script",
    { id: "register-sw" },
    `;(() => {
        if ('serviceWorker'in navigator) {
          navigator.serviceWorker.register('/sw.js');
        }
      })()
    `,
    // <script id="register-sw">;(() => { if ('serviceWorker'in navigator) { navigator.serviceWorker.register('/sw.js'); } })() </script>
  ],
  [
    "script",
    { id: "console-info" },
    `;(() => {
        console.info("\n%c 🎉 嗨~ 想看源代码？ %c \nGitHub仓库: https://github.com/zsdycs/lipk.org \n%c自主%c、%c跨界%c、%c终身学习%c。",
        "color: #fff; padding: 5px 0; background: #29c75f; margin: 1em 0;",
        "display: block;margin-left: 0.5em; margin: 1em 0;",
        "color:#E24432; font-size: 16px; margin: 1em 0;",
        "color:#666666; font-size: 16px; margin: 1em 0;",
        "color:#0E70ED; font-size: 16px; margin: 1em 0;",
        "color:#666666; font-size: 16px; margin: 1em 0;",
        "color:#009E5E; font-size: 16px; margin: 1em 0;",
        "color:#666666; font-size: 16px; margin: 1em 0;");
      })()
    `,
    // <script id="console-info">;(() => { console.info(……); })() </script>
  ],
];
