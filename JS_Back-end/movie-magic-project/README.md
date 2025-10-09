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

- [] Add Movie Controller
- [] Show create movie page
- [] Add routes
- [] Add 404 page
- [] Ready body data
- [] Create movie
  - [] Add action
  - [] Add service
  - [] Add model method for creating movie
- [] Redirect after creation
- [] Add unique if for each cerated movie

### Details

- [] Add navigation button for detail page
- [] Add route with param for details page
- [] GetOne movie from service
- [] Find movie by id from model
- [] Render details page with dynamic data

### Search

- [] Show static search page
- [] Render all movies
- [] Modify search form
- [] Filter movies
  - [] By year
  - [] By genre
  - [] By title
- [] Remember search words

### Bonuses

- [] Dynamic page title
- [] Rating (temp solution)
- [] File Persistance
