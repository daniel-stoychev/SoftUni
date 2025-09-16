export function loggerMiddleware(req, res, next) {
    console.log(`HTTP Request: ${req.method} - ${req.url}`);

    next();
}

export function userLoginLoggerMiddleware(req, res, next) {
    console.log(`User login`);

    if (Math.random() < 0.5) {
        return res.send('user login is unavailable')
    }
    next();
}