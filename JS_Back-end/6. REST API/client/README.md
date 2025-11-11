Client SPA (vanilla JS)

Overview

- Small single-page application in the `client/` folder.
- Connects to the API at http://localhost:5000 by default.

Features

- Login (POST /users/login) — stores token in localStorage.
- Logout — clears saved token.
- List posts (GET /posts).
- Create post (POST /posts) — requires authentication.
- Attempt update/delete (PUT/DELETE /posts/:id) if the API exposes them; otherwise the client will show an error message explaining this.

Files

- `index.html` — main page
- `styles.css` — minimal styling
- `app.js` — SPA logic and API calls

How to run

1. Start the API server (from `api/`):

```bash
cd api
npm install
npm start
```

2. Open the client: open `client/index.html` in your browser (live-server or similar recommended).

Notes & next steps

- The server currently exposes GET /posts and POST /posts and POST /users/login; update/delete routes are not present — add them server-side if you need full CRUD.
- Improve accessibility and routing if you need deep links.
