# Session & Authentication

## Cookies

- HTTP - stateless - there is no way for the server to track communication
- cookies are given by the server with the first response so it can remembers the communication if second request from the same user appears. Cookies are stored on Client abd there are 2 sessions:
  - client session
  - server session - here server keeps sopme information about the cookie in the server memory

## Cookies librabry

- cookieParser - it is Express Middleware
