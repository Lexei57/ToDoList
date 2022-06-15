const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// удаляет что-то
const del = require ('del');

// работа с цсс
gulp.task('css', () => {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'));
})

// работа с html
gulp.task('html', () => {
    return gulp.src ('./src/*.html')
    .pipe(gulp.dest('./build'));
})

gulp.task('js', () => {
    return gulp.src ('./src/*.js')
    .pipe(gulp.dest('./build'));
})


// работа с копированием. Когда перечисляем папки для копирования делаем это через [], т.к. это массив
gulp.task ('copy', () => {
    return gulp.src([
        './src/js/**',
        './src/images/**/*.*'
    ]).pipe(gulp.dest('./build'))
})

// команда для удаления чего-то
gulp.task('clear', function() {
    return del ("build");
});

// позволяет выполнять npmt start при сохранении css
gulp.watch('./src/scss/**/*.scss', gulp.series('css'))
// позволяет выполнять npmt start при сохранении html
gulp.watch('./src/**/*.html', gulp.series('html'))
// позволяет выполнять npmt start при сохранении js
gulp.watch('./src/**/*.js', gulp.series('js'))


gulp.task("start", gulp.series('clear','copy', 'css', 'html', 'js'))
