import path from "path";
import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	resolve: {
        alias: {
            $components: path.resolve("src", "components"),
            $stores: path.resolve("src", "stores"),
            $objects: path.resolve("src", "objects"),
            $actions: path.resolve("src", "actions"),
        },
    },
	plugins: [sveltekit()]
};

export default config;
