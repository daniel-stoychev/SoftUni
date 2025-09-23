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
- [x] Ability to parse user data (read body data)
- [ ] Create movie
  - [x] Add action
  - [x] Add service
  - [ ] Add model method for creating movie
- [ ]
- [ ] Add 404 page

---

#### Comments

- here we use 3 layer architecture (different than MVC/model view controller)
  - standard for backend app development
  - three main elements (layer)
  - controller - group of actions handling the requests
  - service - handles & completes the requests (and the business logic / logical operation)
  - data - handles the data that is required by the service
