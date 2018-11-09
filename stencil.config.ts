import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "wc-menu-button",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ]
};
