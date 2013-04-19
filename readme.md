# wordpress theme base

example of using grunt for wordpress theme development

## How to use?

-   clone this repository, remove `.git` folder
-   move to your wordpress `themes` directory
-   edit `package.json` with your new project data
-   install all dependencies -> `npm install`
-   for development run `grunt watch`
-   before deploying run `grunt build:js`, `grunt build:css` or both together `grunt build:all`

## Project structure

    - theme.folder
      - javascripts
        - sources // put all your logic here
        - ie
        - libs // put all external libraries/plugins here
        libs.js
        main.js // resulting file included in template
      - stylesheets
        - libs
        main.styl
      style.css // resulting file included in template
