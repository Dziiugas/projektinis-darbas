let mix = require('laravel-mix')

mix.js('src/modules/app.js', 'public')
.sass('src//modules/scss/style.scss','css')
.setPublicPath('public')