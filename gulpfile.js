const { watch, series, src, dest } = require("gulp");
const concat = require("gulp-concat");

function js(cb) {
  return src([
    "node_modules/alpinejs/dist/alpine.js",
    "node_modules/draggable/dist/draggable.min.js",
    "src/js/app.js",
  ])
    .pipe(concat("app.js"))
    .pipe(dest("dist/js"));
}

function css(cb) {
  return src(["node_modules/98.css/build/98.css", "src/css/*.css"])
    .pipe(concat("app.css"))
    .pipe(dest("dist/css"));
}

function images(cb) {
  return src(["src/img/*"]).pipe(dest("dist/img"));
}

function html(cb) {
  return src(["src/*"]).pipe(dest("dist"));
}

exports.default = series(js, css, images, html);

exports.watch = function () {
  watch("src/css/*.css", css);
  watch("src/js/*.js", js);
  watch("src/*.html", html);
  watch("src/img/*", images);
};
