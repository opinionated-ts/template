import { cspellConfig } from "@opinionated-ts/config";
import { defineConfig } from "cspell";

export default defineConfig({
  ...cspellConfig,

  dictionaries: [
    ...cspellConfig.dictionaries,
    // Add your custom dictionaries here
  ],

  import: [
    ...cspellConfig.import,
    // Add your custom import paths here
  ],

  words: [
    ...cspellConfig.words,
    // Add your custom words here
  ],

  // Add any additional custom configuration here
});
