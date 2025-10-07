# Session & Authentication

## Cookies

- HTTP - stateless - there is no way for the server to track communication
- cookies are given by the server with the first response so it can remembers the communication if second request from the same user appears. Cookies are stored on Client abd there are 2 sessions:
  - client session
  - server session - here server keeps sopme information about the cookie in the server memory

### Cookies librabry

- cookieParser - it is Express Middleware

## Sessions

## Authentication

- Bcrypt - it is Express Middleware

## JSON Web Toekns (JWT)

- very popular
- standard that allows transmit information in secure way between client & server (in most cases)
  - issuer - someone that creates the token & validates (when the token returns) if the token is the same
- information in the token is public (in most cases) but can be encrypted
- used for athorization
- there are 3 parts of the toke: HEADER . PAYLOAD . SIGNATURE

### Steps

-> create payload -> create token -> add token to cookie -> send the request
