# Saint Joseph: a Multipurpose Template

Saint Joseph is a Multipurpose Html5 Template, where the seal is placed in accessibility, performance and responsiveness to any device. Saint Joseph is a highly customizable template and its main goal is to be used right out of the box, with few tweaks from the source files or directly from the dist folder

The project is created using [sass](https://sass-lang.com/), [gulp](https://gulpjs.com/) and [typescript](https://www.typescriptlang.org/).

## Installation

This project relies on ***nodejs*** for local server development and ***gulp*** for the running tasks. 
So please:
* download and install [nodejs](https://nodejs.org/) 
* download [gulp](https://gulpjs.com/)
* install the following node plugins:
    * [Gulp Typescript](https://www.npmjs.com/package/gulp-typescript) `npm install gulp-typescript typescript`
    * [Gulp Server Livereload](https://www.npmjs.com/package/gulp-server-livereload) `npm install --save-dev gulp-server-livereload`
    * [Gulp Sass](https://www.npmjs.com/package/gulp-sass) `npm install node-sass gulp-sass --save-dev`

Everything is set up on the folder you downloaded the Saint Joseph, you just type "gulp" in CMD, so a live server on your favourite browser will be up at port 8000. Besides any change in sass or typescript is watched and the site will reload automatically with the latest changes.

## Architecture

This project is prepared to be used "out of the box", but if you need to do some customizations, there are two main folders to have in mind for that purpose:
* ***src***: where typescript and sass files are held in folders with the respective names. 
    * Regarding typescript (ts) there it can be found with the interaction for the main menu and filter for portfolio section. JS files compiles in dist/js/main.js. 
    * In this folder sass folder is stored with each section styling plus mixins, icons, reset css and style guide (general site styling). All this files compiles in dist/css/style.css
* ***dist***


## Template Sections



