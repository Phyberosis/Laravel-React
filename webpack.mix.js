const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    postCss: [
        require('autoprefixer'),
    ]
})

mix.setPublicPath('public');

mix.webpackConfig({
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'resources/matx/src'),
        ]
    }
})

mix.js('resources/js/app.js', 'public/js')
    .react()
//     // .sass('resources/sass/app.scss', 'public/css');

// mix.js('resources/matx/src/index.jsx', 'public/js').react()
mix.copy('./resources/matx/public/assets/', './public/assets/')

// mix.js('resources/coreui/src/index.js', 'public/js/app.js').version()
// mix.copy('./resources/coreui/src/assets/', './public/asssets/')
// mix.copy('./resources/coreui/public/avatars/', './public/avatars/')