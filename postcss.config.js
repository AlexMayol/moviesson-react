const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require('cssnano');
module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        process.env.NODE_ENV === "production" && purgecss({
            content: [
                './src/**/*.jsx',
                './src/**/**/*.jsx',
                './src/App.js',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
        process.env.NODE_ENV === "production" && cssnano({
            preset: 'default',
        })
    ],
};