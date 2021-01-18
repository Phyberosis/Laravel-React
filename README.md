# Laravel + React using Material UI theme
## Steps I took

get docker
https://www.docker.com/products/docker-desktop

get composer
https://getcomposer.org/doc/00-intro.md

in powershell:

$ composer global require laravel/installer
$ laravel new ${name}
$ cd ${name}

$ composer require laravel/ui
$ php artisan ui react
$ npm install

$ npm install @material-ui/core

https://dev.to/lvtdeveloper/using-react-in-a-laravel-application-8fp
start from 2nd picture
exporting classes changed to just functions, I think

need to run:
> npm run dev
to "build" react js components before they show up

Html alignment uses some bootstrap

import stuff from material:
import { Button } from '@material-ui/core';
https://material-ui.com/api/button/

to start
$ php artisan serve