import { type UserConfig } from "vitepress";
import { type Routes } from "./theme/utils/app-routes.js";

export interface CustomConfig extends UserConfig {
  routes: Routes[];
  vitepressVersion?: string;
  since?: string;
  author?: string;
}

export interface Menu {
  name: string;
  url: string;
}
