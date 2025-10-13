# movie-magic-sept-2025

SoftUni JS Back-End Course Workshop

## Development Steps

### Setup

- [x] Initialize Project
- [x] Add Express Server `npm i express`
- [x] Config debugging
- [x] Add Workshop Resources
- [x] Setup Handlebars `npm i express-handlebars`
- [x] Setup static files
- [x] Render Home Page
- [x] Add Layout
- [x] Render About Page

### Architecture and dynamic rendering (3 layer architecture != MVC (modle view controller))

### Conteoller (groupe of actions / delegation of requests) - Service (perform specific actions) - DATA layer (keps/holds the data)

- [x] Add home controller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on home page
- [x] Show no movies screen

### Create Movie

- [x] Add Movie Controller
- [x] Show create movie page
- [x] Add routes
- [x] Read body data
- [x] Create movie
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating movie
- [x] Redirect after creation
- [x] Add unique if for each cerated movie

### Details

- [x] Add navigation button for detail page
- [x] Add route with param for details page
- [x] GetOne movie from service
- [x] Find movie by id from model
- [x] Render details page with dynamic data without stars

### Search

- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [x] Filter movies
  - [x] By year
  - [x] By genre
  - [x] By title
- [x] Remember search words

### Bonuses

- [x] Add 404 page
- [x] Dynamic page title
- [] Rating (temp solution)
- [] File Persistance
