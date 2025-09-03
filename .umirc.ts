import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/html5", component: "html5" },
    { path: "/css3", component: "css3" },
    { path: "/es6", component: "es6" },
  ],
  npmClient: 'npm',
  
});
