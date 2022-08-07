import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        scss: {
            prependData: `@import "./src/globalstyles.scss";`,
        },
    }),

    kit: {
        prerender: {
            default: true,
        },

        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte",
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: null,
        }),

        paths: {
            base: "",
            assets: "",
        },
    },
};

export default config;
