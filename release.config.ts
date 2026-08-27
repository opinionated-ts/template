import { semanticReleaseConfig } from "@opinionated-ts/config";
import { type Options } from "semantic-release";

export default {
  ...semanticReleaseConfig,

  plugins: [
    ...semanticReleaseConfig.plugins,

    // your custom plugins here
    // "@semantic-release/npm", // → publish to npm if needed
  ],
} satisfies Options;
