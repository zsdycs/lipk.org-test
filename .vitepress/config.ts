import { defineConfigWithTheme } from "vitepress";
import { type CustomConfig } from "./theme";
import { appRoutes } from "./theme/utils/app-routes.js";
import { head } from "./theme/utils/head";
import pkg from "vitepress/package.json";

const routes = appRoutes({ popDirs: ["site"] });

export default defineConfigWithTheme<CustomConfig>({
  title: "李鹏坤",
  titleTemplate: ':title - 李鹏坤',
  head,
  outDir: "./dist",
  srcDir: './site',
  cacheDir: './cache',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    routes,
    vitepressVersion: pkg.version,
  },
});
