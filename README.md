Angularjs dynamic dashboard implementation

### Demo URL: http://ktalvis.com/dashboard/source/#/

### Specs: 
- Basic dynamic dashboard built with angularjs. A json configuration file is used in order to display highchart (https://www.highcharts.com/) elements. The 'add new chart' functionality let the user to add a new element-chart on the dashboard and the 'export page' functionality populates and exports a .pdf file of the page's elements. Each chart can be exported separately as well.

### How to install on localhost:
- Clone the repository.
- This application runs on Node.js. Install dependencies by typing:

    $ npm install

## How to run on localhost:
- Run locally by typing:  

    $ node app.js

The app is set to be listening to port: 8888 (http://localhost:8888)

## Tecnhologies used:
- Bootstrap 3.3.7
- AngularJS 1.4.7
- Native JS
- Highcharts.js
- CSS
- HTML

### Comments:  
- Some frameworks/libraries like bootstrap are being called via cdn urls in order to reduce the size of the application. AngularJS is installed via npm and node.js in order to show
- how a dependency can be handled. 

- MainController and secondaryController should normally be in separate files, but based on the size of the project they have been placed in app.js.

## Karolos Talvis - 4/2/18  


