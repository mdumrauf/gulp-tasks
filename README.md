# gulp-tasks
Common Gulp.js tasks used amongst projects

# Usage

```javascript
var gulp = require('gulp');

var tasks = require('gulp-tasks');

gulp.task('mocha', tasks.mocha);
gulp.task('jshint', tasks.jshint);
gulp.task('server', tasks.nodemon);

```