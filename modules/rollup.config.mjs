import {nodeResolve} from "@rollup/plugin-node-resolve";
export default {
    input: "./editor.mjs",
    output: {
        file: "../resources/js/editor.bundle.js",
        format: "iife",
        name: "CM"
    },
    plugins: [nodeResolve()]
}