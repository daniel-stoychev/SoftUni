# movie-magic-sept-2025

SoftUni JS Back-End Course Workshop

## Development Steps

## Part 1 (Expres & Templating)

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
- [x] Rating (temp solution)
- [x] File Persistance

---

## Part 2 (MongoDB and Mongoose)

### Prerequisites

- [x] Install MongoDB Community Server
- [x] Install Compass GUI
- [] Install Mongosh CLI (Optional)

### Setup Database

- [x] Install mongoose `npm i mongoose`
- [x] Connect to DB

### Refactor Movies to use mongoose

- [x] Add movie model
  - [x] Create movie schema
  - [x] Create movie model
- [x] import file movies to database !DON'T IMPORT IDs
- [x] Fix own property handlebars problem with lean method
- [x] General fix for own property problem
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search

### Add Cast

- [x] Add new resources
- [x] Create Cast Controller
- [x] Create Cast Page
- [x] Add Cast model
- [x] Create Cast Service
- [x] Create Cast Functionallity

### Attach Cast to Movie (relations)

- [x] Add attach cast button
- [x] Add attach cast page
- [x] Add dynamic data to cast page
- [x] Show cast list in attach select
- [x] Add relation between cast and movie
- [x] Attach cast functionallity

### Show Cast Details (population)

- [x] Get movie casts filtered
- [x] Show casts on details
- [] Get movie casts using population

### Bonuses

- [] Filter casts if they are already attached
- [ ] Env variables
- [ ] name in movie
- [ ] Back refference from vscode
- [ ] Add movie views to a folder
