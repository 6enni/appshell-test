import type { HvAppShellConfig } from "@hitachivantara/app-shell-vite-plugin";

export default (): HvAppShellConfig => ({
  name: "my-app",

  baseUrl: "/",
  menu: [
    { label: "example", target: "/Example" },
    { label: "tab2", target: "/Tav2" }
  ],
  mainPanel: {
    maxWidth: "xl"  
  },
  providers:[
    {
      bundle: "@hv-apps/my-app/providers/UserCtxprovider.js",
    }
  ]

});
