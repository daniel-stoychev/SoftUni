# nodeJS_exam_prep_3

Exam prep Dec 2025

# SoftUni JS Back-End Exam Preparation Cheat Sheet

## Create Skeleton Project

### 1. Initialize Project

- [x] Initialize npm project `npm init -y`
- [x] Change module system
- [x] Add start file `/src/index.js`
- [x] Add dev script
- [x] Config debugger
- [x] Add resources

### 2. Express

- [x] Install express `npm i express`
- [x] Init express server
- [x] Setup static middleware
- [x] Add body parser (`urlencoded`)
- [x] Add home controller
- [x] Add route file
- [x] Add error controller

### 3. Handlebars

- [x] Install handlebars `npm i express-handlebars`
- [x] Config hanlebars engine
- [x] Use handlebars engine
- [x] Config handlebars file extension
- [x] Set views folder
- [x] Add home view
- [x] Render home view without layout `res.render('home', {layout: false});`
- [x] Fix asset paths
- [x] Add layout
- [x] Add partials dir
- [x] Config handlebars to work with mongoose documents `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database

- [x] Install mongoose `npm i mongoose`
- [x] Connect to db
- [x] Add error handling on connect
- [x] Add simple user model

### 5. Register

- [x] Fix navigation links
- [x] Add user controller
- [x] Add user controller to routes
- [x] Create register view
- [x] Render register view
- [x] Modify register form
- [x] Create post route for register
- [x] Create user service
- [x] Redirect after successfull register
- [x] Instal bcrypt `npm i bcrypt`
- [x] Hash passwords before safe
- [x] BONUS: Check if user exists

### 6. Login

- [x] Fix login navigation link
- [x] Add login view
- [x] Add get login action
- [x] Fix login form
- [x] Add post login acion
- [x] Add login method in userService
- [x] Validate if user exists
- [x] Validate password
- [x] Install jsonwebtoke `npm i jsonwebtoken`
- [x] Generate token
- [x] Call userService from userController
- [x] Send token as cookie
- [x] Redirect to homepage
- [x] BONUS: Extract jwt secret to constant or env
- [x] Auto login on register

### 7. Logout

- [x] Add logout navigation link
- [x] Add logout action

### 8. Authentication

- [x] Install and use cookie-parser `npm i cookie-parser`
- [x] Create auth middleware
  - [x] Allow if guest (no token)
  - [x] Verify token (clear session if invalid)
  - [x] Attach decoded token to req.user (if token is valid)
- [x] Use auth middleware

### 9. Authorization

- [x] Create isAuth middleware
- [x] Create isGuest middleware
- [x] Add route guards
- [x] Add not found page

### 10. Dynamic content

- [x] Add user data to handlebars context
- [x] Dynamic navigation
- [x] Dynamic titles
- [] BONUS: Set page title from view

### 11. Error handling and Validation

- [x] Add error message in notification
- [x] Notification conditional rendering
- [x] Create getErrorMessage util function
- [x] Add error handling for register
- [x] Add register form data persistance
- [x] Check repeatPassword in service
- [] BONUS: Check repeatPassword in model
- [x] Error handling and data persistance on login

### Bonus

- [] Export helpers into separate module
- [] Add env variable for debuging
- [x] Add global error handler
- [ ] Add bundler
- [ ] Use async jwt
- [ ] Refresh token

## Steps to Use the Skeleton Project

- [x] Install dependencies `npm i`
- [x] Remove old resources and add new resources `/src/public`
- [x] Add html files to the views folder
- [x] Rename database name
- [x] Replace layout
  - [x] Dynamic title
  - [x] Fix resource routes
  - [x] Error notification
  - [x] Body
  - [x] Dynamic Navigation
- [x] Replace home page
- [x] Modify navigation links
- [x] Modify User model
- [x] Modify login and register controller
- [x] Modify login and register service
- [x] Modify token generation
- [x] Modify login and register error handlers
- [x] Replace login page
- [x] Replace register page
- [x] Replace 404 page

## Solve Mind Blog Exam Prep ============

### Create/add element Page

- [x] Fix creat/add element(blog/game/myth...) navigation link
- [x] Add element controller
- [x] Add controller to routes
- [x] Add create action with render
- [x] Add element folder in views
- [x] Add create element view
- [] Add blogs model
- [] Modify create blogs form
- [] Create blogs post action
- [] Create blogs service with create method
- [] Add owner on blogs creation
- [] Add error handling

### Blogs/Dashboard Catalog Page

- [x] Fix navigation link
- [x] Add catalog view
- [x] Add get catalog action with static blogs
- [] Get all blogs service
- [] Show dynamic blogs

### Home page blogs

- [] Add get latest blogs in blog service
- [] Show dynamic lastest blogs on home

### Blog details

- [] Fix details link in blogs page
- [] Fix details link in home page
- [] Show static details page
- [] Add getOne method in blog service
- [] Show dynamic details page (without author and followers)
- [] Show dynamic author
- [] Hide buttons if not logged
- [] Show edit and delete button if author
- [] Show follow and already following buttons if logged
- [] Implement follow functionallity
  - [] Add followers in blog relation
  - [] Add follow action
  - [] Add follow service method
  - [] Fix follow link
- [] Show dynamic follwers
- [] Show follow button or already following buttons conditionally

### Delete blog

- [] Fix navigation link in details
- [] Add delete action
- [] Add delete method in blog service

### Edit blog

- [] Fix navigation link in details
- [] Add get edit action
- [] Show empty edit page
- [] Populate edit form with blog data
- [] Add post edit action
- [] Add edit method in blog service
- [] Add error handling

### Profile

- [] Fix navigation link
- [] Show static profile page
- [] Show dynamic user information
- [] Show created blogs
- [] Show followed blogs

## Validation and error handling
