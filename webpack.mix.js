const mix = require("laravel-mix");
const purgecss = require("@fullhuman/postcss-purgecss");

let optionsApp = [];

if (mix.inProduction()) {
  optionsApp.push(
    purgecss({
      content: ["**/*.twig", "**/*.html", "**/*.vue"],
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      safelist: {
        deep: [],
      },
    })
  );
}

mix.sass("src/scss/base/_layout.scss", "web/assets/css");
mix.sass("src/scss/base/_fonts.scss", "web/assets/css");
mix.sass("src/scss/app.scss", "web/assets/css", {}, optionsApp);

mix
  .js("src/js/app.js", "web/assets/js")
  .vue()
  .extract(["vue"])
  .minify("web/assets/js/app.js");
