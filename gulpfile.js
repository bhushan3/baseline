// Node packages / dependencies.
const { task, series, watch, src, dest } = require( 'gulp' );
const autoprefixer = require( 'autoprefixer' );
const babel = require( 'gulp-babel' );
const browserSync = require( 'browser-sync' ).create();
const clean = require( 'gulp-clean' );
const cleanCSS = require( 'gulp-clean-css' );
const concat = require( 'gulp-concat' );
const rename = require( 'gulp-rename' );
const postCSS = require( 'gulp-postcss' );
const sass = require( 'gulp-sass' );
const uglify = require( 'gulp-uglify' );

// Compile SASS.
task( 'sass', function() {
	return src( 'src/scss/baseline.scss' )
		.pipe( sass( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
		.pipe( postCSS( [ autoprefixer() ] ) )
		.pipe( dest( 'dist' ) )
		.pipe( browserSync.stream() )
		.pipe( cleanCSS() )
		.pipe( rename( { extname: '.min.css' } ) )
		.pipe( dest( 'dist' ) );
} );

// Bundle JS files.
task( 'js', function() {
	return src( 'src/js/baseline.js' )
		.pipe( babel() )
		.pipe( concat( 'baseline.js' ) )
		.pipe( dest( 'dist' ) )
		.pipe( browserSync.stream() )
		.pipe( uglify() )
		.pipe( rename( { extname: '.min.js' } ) )
		.pipe( dest( 'dist' ) );
} );

// Watch our files reload browser on change.
task( 'serve', function() {
	browserSync.init( {
		open: true,
		startPath: 'docs',
		server: './',
	} );
	watch( 'src/scss/**/*.scss', series( 'sass' ) );
	watch( 'src/js/**/*.js', series( 'js' ) );
	watch( 'docs/**/*' ).on( 'change', browserSync.reload );
} );

// Clean dist folder.
task( 'clean', function() {
	return src( 'dist', { allowEmpty: true, read: false } )
		.pipe( clean() );
} );

// Prepare all for production.
task( 'build', series( 'clean', 'sass', 'js' ) );

// Default gulp task.
task( 'default', series( 'build', 'serve' ) );
