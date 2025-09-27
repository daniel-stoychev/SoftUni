# Movie-magic-project-sept 2025

## Steps

- [x] Initializing project
- [x] Configure package.json & launch.json
- [x] Add Express server
- [x] Add resources
- [x] Setup Handlebars
- [x] Setup static files
- [x] Render Home page
  - [x] do HTML files changes (home)
- [x] Add layout
- [x] Render About page
- [x] Render Create page
- [x] Render Search page

---

### Architecture & dynamic rendering

- [x] Add home controller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on homepage
- [x] Show no movies screen
- [ ]

### Create Movie

- [x] Add Movie controller
- [x] Show create movie page
- [x] Add routes
- [x] Add 404 page
- [x] Ability to parse user data (read body data)
- [x] Create movie
  - [x] Add action
  - [x] Add service //1.55
  - [x] Add model method for creating movie
- [x] Redirect after creation
- [x] Add unique for each created movie
- [ ]
- [ ]

### Details page

- [x] Add Navigation button for details page
- [x] Add route with param for details page
- [x] GetOne movie from service
- [x] Find movide by id in model
- [x] Render details page with dynamic data

### Search page

- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [] Filter movies
  - [x] by year
  - [x] by title
  - [x] by genre
- [x] Remember search words

### Bonuses

- [x] Dynamic page title // THIS WILL BE ON THE EXAM
- [ ] File Persitance
- [ ] Rating

---

#### Comments

- here we use 3 layer architecture (different than MVC/model view controller)
  - standard for backend app development
  - three main elements (layer)
  - controller - group of actions handling the requests
  - service - handles & completes the requests (and the business logic / logical operation)
  - data - handles the data that is required by the service
