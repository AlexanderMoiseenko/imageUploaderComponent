var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"),
    cssmin = require("gulp-cssmin"),
    rename = require("gulp-rename"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("less", function() {
    return gulp.src("app/less/*.less")
    .pipe(less())
    .pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8"], {cascade: false}))
    .pipe(gulp.dest("app/css"))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task("watch",["browser-sync", "less"], function() {
    gulp.watch('app/less/*.less', ["less"]);
    gulp.watch("app/*.html", browserSync.reload);
    gulp.watch("app/js/**/*.js", browserSync.reload);
});

gulp.task("build", ["less"], function() {

    var buildCss = gulp.src([
        "app/css/main.css",
        "app/css/main.min.css"
        ])
    .pipe(gulp.dest("dist/css"))

    var buildJs = gulp.src("app/js/*")
    .pipe(gulp.dest("dist/js"))

    var buildHtml = gulp.src("app/*.html")
    .pipe(gulp.dest("dist"));
});


gulp.task("default", ["watch"]);