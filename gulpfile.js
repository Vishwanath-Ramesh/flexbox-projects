var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", async () => {
  gulp.src("./src/*/*.css").pipe(autoprefixer()).pipe(gulp.dest("build"));
});
