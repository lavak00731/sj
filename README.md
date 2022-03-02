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

In case the previous steps are not working try the command 'npm install'.

## Architecture

This project is prepared to be used "out of the box", but if you need to do some customizations, there are two main folders to have in mind for that purpose:
* ***src***: where typescript and sass files are held in folders with the respective names. 
    * Regarding typescript (ts) there it can be found with the interaction for the main menu and filter for portfolio section. JS files compiles in dist/js/main.js. 
    * In this folder sass folder is stored with each section styling plus mixins, icons, reset css and style guide (general site styling). All this files compiles in dist/css/style.css
* ***dist***: in this folder a customer can find:
    *  html with the sections of this template
    *  "css" folder with fonts and style.css which compiles all sass files
    *  "icons" folder where svg icons are present
    * "js" folder where the main.ts compiles into main.js


## Template Sections

This template has several sections:

* ***Header***: where logo and nav are located. Header is fixed positioned in order to have navigation 
* ***Nav***: Navigation, created based in a button where a accessible navigation is displayed. The navigation is based on links and buttons in order to show secondary links to the site.
* ***Hero***: main title lives there with a brief description of this page, plus two call to action buttons. It can be styled to be used with a background image. On mobile devices it covers the full viewport. 
* ***Testimonials***: a place where a legit customer can recomend our services or stress our commitment.
* ***Services***: where there is an explanation of the services that the agency is doing.
* ***Statistics***: description of the work done by the agency.
* ***Portfolio***:  a place to show projects done, that can be sorted out by categories. The images are lazyload for performance and a responsive image strategy per device is used with attribute [srcset](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes).  A description is showed on each item on hover and on focus. Regarding sorting, it is done based on the attribute ***data-sort***. For example: if we are sorting our items by Design, Code or Apps, we should add those name to div with class "sj-portfolio-item" in the attribute "data-sort". All the values we use must be included on the input type radio which represent all the sorting options. Finally this component is using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), and it is prepared to have an important element highlighted using the class "sj-portfolio-item-prominent" (only one element). For those browsers with does not support CSS Grid, the grid is served by [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) 
* ***Pricing***: it is a component using a card design where a title, descriptions and call to action buttons are present.
* ***Clients***: a little section to show clients logo in simple grid.
* ***Contacts***: a contact form validated using Html5 validation api and other off line modes to get in touch
* ***Footer***: copyright information and links to social media. 

## General Considerations

### Accessibility

This template tries to be helpful for any type of audience so there are some [visually hidden text](https://webaim.org/techniques/css/invisiblecontent/#offscreen) specially in icons with links in order to give a context to a screen reader user. The class used for that is "sj-visually-hidden". 

Another accessible feature are the combinations of colors we used in this template. The colors can be found in src/sass/_variables.scss. We know that the selection of colors we use probably will not match your needs, so if you are going change the color palette please consider to have a contrast ratio of 4.5:1. Please it is recommended to use a [contrast color tool](https://webaim.org/resources/contrastchecker/).

All the interactive elements (anchors, buttons, navigation) are suitable for being used for any mean: mouse, touch devices and keyboard navigation, and the styling applied for this last mean is already applied. 

Finally all the features known for accessibility are covered by this template, just follow the original examples for any modification.

### Section Using 

All section are using "aria-labelledby" in order to depict which section is about 