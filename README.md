# Application build guide 

Application was implemented from scratch. I was not using any generators like `create-react-app` nor styling frameworks like `bootstrap`. Environment and proper styling (buttons, links, etc.) was implemented on my own. Setting my own environment allowed me to
include only those dependencies which I actually need. Styling decision was made to show my native CSS knowledge. Because of deadline refactoring (especially of styling) might be still needed.

Application includes all feature requirenments like login, logout, fetching contacts list.
Features:
- contacts list url page protection against unauthenticated access
- filtering based on contact types
- responsive web design
- infinite scroll of contacts
- throttling events in contacts list on user scroll events
- heavy grid and flexbox usage in RWD
- handling of form validation errors
- handling of empty contacts list/ unknown url request/ errors while fetching contacts lists.
- treeshaking
- dynamic lazy loading of route components using new react 16.6 features
- additional protection disabling buttons, hiding of elements


## Quick Overview

To run application *npm* and *nodejs*. 
Tested on Chrome v63, npm v5.6.0, node v10.0.0

To run application just clone repository from github, install dependencies and run `npm start`.
*To disable CORS protection install proper browser plugin.*

```sh
# Clone repository
git clone https://github.com/Lukasz-Bialkowski/leadscore-contacts-app.git

cd leadscore-contacts-app

# To download dependencies
npm install

# To run webpack-server
npm start
```

